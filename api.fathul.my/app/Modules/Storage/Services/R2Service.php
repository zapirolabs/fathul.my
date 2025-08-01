<?php

namespace Storage\Services;

use Aws\S3\S3Client;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Storage\Models\StorageFile;
use Aws\S3\Exception\S3Exception;

class R2Service
{
    protected S3Client $S3Client;

    public function __construct()
    {
        $this->S3Client = new S3Client([
            'version' => 'latest',
            'region' => config('filesystems.disks.r2.region') ?? 'auto',
            'endpoint' => config('filesystems.disks.r2.endpoint'),
            'use_path_style_endpoint' => config('filesystems.disks.r2.use_path_style_endpoint') ?? false,
            'credentials' => [
                'key' => config('filesystems.disks.r2.key'),
                'secret' => config('filesystems.disks.r2.secret'),
            ],
        ]);
    }

    /**
     * Upload a file to R2
     */
    public function upload(UploadedFile $file, array $options = []): array
    {
        try {
            // Generate unique file path
            $extension = $file->getClientOriginalExtension();
            $filename = Str::uuid() . '.' . $extension;
            $date_path = now()->format('Y/m/d');
            $file_path = trim($options['path'] ?? 'uploads', '/') . '/' . $date_path . '/' . $filename;
            
            // Prepare metadata
            $metadata = [
                'visibility' => $options['visibility'] ?? 'private',
                'cache_control' => $options['cache_control'] ?? 'max-age=31536000',
                'custom_metadata' => array_merge([
                    'original_name' => $file->getClientOriginalName(),
                    'uploaded_at' => now()->toIso8601String(),
                    'uploaded_by' => auth()->id() ?? 'system',
                ], $options['metadata'] ?? []),
            ];

            // Upload file
            $result = Storage::disk('r2')->put($file_path, $file, [
                'visibility' => $metadata['visibility'],
                'Metadata' => $metadata['custom_metadata'],
                'CacheControl' => $metadata['cache_control'],
                'ContentType' => $file->getMimeType(),
            ]);

            if (!$result) {
                throw new \Exception('Failed to upload file to R2');
            }

            // Get object info
            $object_info = [];
            try {
                $result = $this->S3Client->headObject([
                    'Bucket' => config('filesystems.disks.r2.bucket'),
                    'Key' => $file_path,
                ]);
                $object_info = $result->toArray();
            } catch (S3Exception $e) {
                Log::error('R2 Get Object Info Error: ' . $e->getMessage());
            }

            // Store file record in database
            $storage_record = StorageFile::create([
                'file_name' => $file->getClientOriginalName(),
                'file_path' => $file_path,
                'file_size' => $file->getSize(),
                'mime_type' => $file->getMimeType(),
                'disk' => 'r2',
                'etag' => $object_info['ETag'] ?? null,
                'version_id' => $object_info['VersionId'] ?? null,
                'metadata' => $metadata['custom_metadata'],
                'uploaded_by' => auth()->id() ?? null,
            ]);

            return [
                'success' => true,
                'file_id' => $storage_record->id,
                'path' => $file_path,
                'url' => Storage::disk('r2')->url($file_path),
                'size' => $file->getSize(),
                'mime_type' => $file->getMimeType(),
                'etag' => $object_info['ETag'] ?? null,
                'version_id' => $object_info['VersionId'] ?? null,
            ];

        } catch (\Exception $e) {
            Log::error('R2 Upload Error: ' . $e->getMessage(), [
                'file' => $file->getClientOriginalName(),
                'error' => $e
            ]);

            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Generate a presigned URL for direct uploads
     */
    public function generatePresignedUrl(string $path, array $options = []): array
    {
        try {
            $expiry = $options['expiry'] ?? 3600;
            $method = $options['method'] ?? 'PUT';
            
            $cmd = $this->S3Client->getCommand($method === 'PUT' ? 'PutObject' : 'GetObject', [
                'Bucket' => config('filesystems.disks.r2.bucket'),
                'Key' => $path,
            ]);

            $request = $this->S3Client->createPresignedRequest($cmd, "+{$expiry} seconds");
            $presigned_url = (string) $request->getUri();

            return [
                'success' => true,
                'url' => $presigned_url,
                'expires_at' => now()->addSeconds($expiry)->toIso8601String(),
                'method' => $method,
            ];

        } catch (\Exception $e) {
            Log::error('R2 Presigned URL Error: ' . $e->getMessage());

            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}
<?php

namespace Storage\Traits;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Storage\Models\StorageFile;
use Aws\S3\Exception\S3Exception;

trait R2UploadTrait
{
    /**
     * Simple upload for files
     */
    protected function simpleUpload(UploadedFile $file, string $path, array $metadata): array
    {
        $result = Storage::disk($this->disk_name)->put($path, $file, [
            'visibility' => $metadata['visibility'] ?? 'private',
            'Metadata' => $metadata['custom_metadata'] ?? [],
            'CacheControl' => $metadata['cache_control'] ?? 'max-age=31536000',
            'ContentType' => $file->getMimeType(),
        ]);

        if (!$result) {
            throw new \Exception('Failed to upload file to R2');
        }

        $object_info = $this->getObjectInfo($path);

        return [
            'path' => $path,
            'etag' => $object_info['ETag'] ?? null,
            'version_id' => $object_info['VersionId'] ?? null,
        ];
    }

    /**
     * Generate a presigned URL for direct uploads
     */
    public function generatePresignedUrl(string $path, array $options = []): array
    {
        try {
            $expiry = $options['expiry'] ?? 3600;
            $method = $options['method'] ?? 'PUT';
            
            $cmd = $this->client->getCommand($method === 'PUT' ? 'PutObject' : 'GetObject', [
                'Bucket' => $this->bucket,
                'Key' => $path,
            ]);

            $request = $this->client->createPresignedRequest($cmd, "+{$expiry} seconds");
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

    /**
     * Get object information
     */
    protected function getObjectInfo(string $path): array
    {
        try {
            $result = $this->client->headObject([
                'Bucket' => $this->bucket,
                'Key' => $path,
            ]);

            return $result->toArray();

        } catch (S3Exception $e) {
            Log::error('R2 Get Object Info Error: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * Generate unique file path
     */
    protected function generateFilePath(UploadedFile $file, string $base_path): string
    {
        $extension = $file->getClientOriginalExtension();
        $filename = Str::uuid() . '.' . $extension;
        $date_path = now()->format('Y/m/d');
        
        return trim($base_path, '/') . '/' . $date_path . '/' . $filename;
    }

    /**
     * Prepare metadata for upload
     */
    protected function prepareMetadata(UploadedFile $file, array $options): array
    {
        return [
            'visibility' => $options['visibility'] ?? 'private',
            'cache_control' => $options['cache_control'] ?? 'max-age=31536000',
            'custom_metadata' => array_merge([
                'original_name' => $file->getClientOriginalName(),
                'uploaded_at' => now()->toIso8601String(),
                'uploaded_by' => auth()->id() ?? 'system',
            ], $options['metadata'] ?? []),
        ];
    }

    /**
     * Store file record in database
     */
    protected function storeFileRecord(array $upload_result, UploadedFile $file, array $metadata): StorageFile
    {
        return StorageFile::create([
            'file_name' => $file->getClientOriginalName(),
            'file_path' => $upload_result['path'],
            'file_size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
            'disk' => $this->disk_name,
            'etag' => $upload_result['etag'] ?? null,
            'version_id' => $upload_result['version_id'] ?? null,
            'metadata' => $metadata['custom_metadata'] ?? [],
            'uploaded_by' => auth()->id() ?? null,
        ]);
    }

    /**
     * Get file URL
     */
    public function getUrl(string $path): string
    {
        return Storage::disk($this->disk_name)->url($path);
    }
} 
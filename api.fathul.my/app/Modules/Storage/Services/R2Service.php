<?php

namespace Storage\Services;

use Aws\S3\S3Client;
use Illuminate\Http\UploadedFile;
use Storage\Traits\R2UploadTrait;

class R2Service
{
    use R2UploadTrait;

    protected S3Client $client;
    protected string $bucket;
    protected string $disk_name = 'r2';
    protected array $allowed_mime_types = [];
    protected int $max_file_size;

    public function __construct()
    {
        $this->initializeClient();
        $this->bucket = config('filesystems.disks.r2.bucket');
        $this->max_file_size = config('r2.max_file_size', 104857600); 
        $this->allowed_mime_types = config('r2.allowed_mime_types', []);
    }

    /**
     * Initialize the S3 client for R2
     */
    protected function initializeClient(): void
    {
        $this->client = new S3Client([
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
            $file_path = $this->generateFilePath($file, $options['path'] ?? 'uploads');
            
            $metadata = $this->prepareMetadata($file, $options);

            $result = $this->simpleUpload($file, $file_path, $metadata);

            $storage_record = $this->storeFileRecord($result, $file, $metadata);

            return [
                'success' => true,
                'file_id' => $storage_record->id,
                'path' => $result['path'],
                'url' => $this->getUrl($result['path']),
                'size' => $file->getSize(),
                'mime_type' => $file->getMimeType(),
                'etag' => $result['etag'] ?? null,
                'version_id' => $result['version_id'] ?? null,
            ];

        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('R2 Upload Error: ' . $e->getMessage(), [
                'file' => $file->getClientOriginalName(),
                'error' => $e
            ]);

            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}
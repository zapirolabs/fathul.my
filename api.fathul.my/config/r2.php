<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cloudflare R2 Configuration
    |--------------------------------------------------------------------------
    |
    | Here you can configure settings specific to Cloudflare R2 uploads
    | including file size limits, multipart thresholds, and allowed mime types.
    |
    */

    /*
    |--------------------------------------------------------------------------
    | Maximum File Size
    |--------------------------------------------------------------------------
    |
    | Maximum file size in bytes that can be uploaded.
    | Default: 5GB (5368709120 bytes)
    |
    */
    'max_file_size' => env('R2_MAX_FILE_SIZE', 5368709120),

    /*
    |--------------------------------------------------------------------------
    | Multipart Upload Threshold
    |--------------------------------------------------------------------------
    |
    | Files larger than this size (in bytes) will use multipart upload.
    | Recommended: 100MB (104857600 bytes) for better performance.
    | Minimum: 5MB as per S3/R2 specifications.
    |
    */
    'multipart_threshold' => env('R2_MULTIPART_THRESHOLD', 104857600),

    /*
    |--------------------------------------------------------------------------
    | Multipart Part Size
    |--------------------------------------------------------------------------
    |
    | Size of each part in multipart uploads (in bytes).
    | Default: 10MB (10485760 bytes)
    | Minimum: 5MB, Maximum: 5GB
    |
    */
    'part_size' => env('R2_PART_SIZE', 10485760),

    /*
    |--------------------------------------------------------------------------
    | Allowed MIME Types
    |--------------------------------------------------------------------------
    |
    | Array of allowed MIME types. Leave empty to allow all types.
    | Example: ['image/jpeg', 'image/png', 'application/pdf']
    |
    */
    'allowed_mime_types' => [
        // Images
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml',
        
        // Documents
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain',
        'text/csv',
        
        // Archives
        'application/zip',
        'application/x-rar-compressed',
        
        // Videos
        'video/mp4',
        'video/quicktime',
        'video/x-msvideo',
        'video/x-flv',
        'video/webm',
        
        // Audio
        'audio/mpeg',
        'audio/wav',
        'audio/ogg',
        'audio/mp4',
    ],

    /*
    |--------------------------------------------------------------------------
    | Presigned URL Expiry
    |--------------------------------------------------------------------------
    |
    | Default expiry time for presigned URLs in seconds.
    | Default: 3600 (1 hour)
    | Maximum: 604800 (7 days)
    |
    */
    'presigned_url_expiry' => env('R2_PRESIGNED_URL_EXPIRY', 3600),

    /*
    |--------------------------------------------------------------------------
    | Default Cache Control
    |--------------------------------------------------------------------------
    |
    | Default Cache-Control header for uploaded files.
    |
    */
    'cache_control' => env('R2_CACHE_CONTROL', 'max-age=31536000'),

    /*
    |--------------------------------------------------------------------------
    | Auto Delete Temporary Files
    |--------------------------------------------------------------------------
    |
    | Automatically delete temporary files older than specified days.
    | Set to 0 to disable auto deletion.
    |
    */
    'auto_delete_temp_days' => env('R2_AUTO_DELETE_TEMP_DAYS', 7),
]; 
# Cloudflare R2 Storage Service

A robust service for uploading files to Cloudflare R2 with Laravel, featuring multipart uploads, presigned URLs, and comprehensive file management.

## Features

- ✅ Simple uploads for files < 100MB
- ✅ Multipart uploads for large files (up to 5GB)
- ✅ Presigned URLs for direct browser uploads
- ✅ File validation and MIME type restrictions
- ✅ Database tracking of uploaded files
- ✅ Automatic file organization by date
- ✅ Download tracking and analytics
- ✅ Temporary and permanent URLs
- ✅ Helper trait for reusable functions

## Installation

### 1. Install Required Package

```bash
composer require league/flysystem-aws-s3-v3 "^3.0" --with-all-dependencies
```

### 2. Environment Configuration

Add these variables to your `.env` file:

```env
# Cloudflare R2 Configuration
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
R2_BUCKET=your_bucket_name
R2_DEFAULT_REGION=auto
R2_ENDPOINT=https://your_account_id.r2.cloudflarestorage.com
R2_URL=https://pub-your_hash.r2.dev  # Or your custom domain
R2_CDN_URL=  # Optional CDN URL
R2_USE_PATH_STYLE_ENDPOINT=false

# Upload Configuration (Optional)
R2_MAX_FILE_SIZE=5368709120  # 5GB
R2_MULTIPART_THRESHOLD=104857600  # 100MB
R2_PART_SIZE=10485760  # 10MB
```

### 3. Getting R2 Credentials

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to R2 section
3. Create a new bucket (if you haven't already)
4. Go to "Manage R2 API tokens"
5. Create a new API token with "Object Read & Write" permissions
6. Copy the Access Key ID and Secret Access Key

### 4. Run Migration

```bash
php artisan migrate
```

## Usage Examples

### Basic File Upload

```php
use Storage\Services\R2Service;

$r2Service = new R2Service();

// Upload a file
$result = $r2Service->upload($request->file('document'), [
    'path' => 'documents',
    'visibility' => 'private',
    'metadata' => [
        'department' => 'sales',
        'category' => 'invoice'
    ]
]);

if ($result['success']) {
    echo "File uploaded successfully!";
    echo "File ID: " . $result['file_id'];
    echo "URL: " . $result['url'];
} else {
    echo "Upload failed: " . $result['error'];
}
```

### Generate Presigned URL for Direct Upload

```php
// Generate a presigned URL for client-side upload
$presignedResult = $r2Service->generatePresignedUrl('uploads/profile-photo.jpg', [
    'expiry' => 3600,  // 1 hour
    'method' => 'PUT'
]);

if ($presignedResult['success']) {
    // Give this URL to your frontend
    $uploadUrl = $presignedResult['url'];
    $expiresAt = $presignedResult['expires_at'];
}
```

### Download a File

```php
// Direct download
return $r2Service->download('path/to/file.pdf', 'custom-name.pdf');

// Get temporary URL (expires in 1 hour)
$tempUrl = $r2Service->getTemporaryUrl('path/to/file.pdf', 3600);
```

### List Files

```php
// List files in a directory
$files = $r2Service->listFiles('documents');

// List all files recursively
$allFiles = $r2Service->listFiles('', true);
```

### Delete a File

```php
$deleted = $r2Service->delete('path/to/file.pdf');
```

## Working with the StorageFile Model

```php
use Storage\Models\StorageFile;

// Find files by user
$userFiles = StorageFile::uploadedBy(auth()->id())->get();

// Find recent uploads
$recentFiles = StorageFile::recent(7)->get();

// Find large files
$largeFiles = StorageFile::largerThan(104857600)->get(); // > 100MB

// Find images
$images = StorageFile::ofType('image')->get();

// Get file with URL
$file = StorageFile::find(1);
echo $file->url;  // Full URL
echo $file->human_size;  // "125.5 MB"
echo $file->getTemporaryUrl(3600);  // Temporary URL
```

## Using the R2UploadTrait

```php
use Storage\Traits\R2UploadTrait;

class MyController extends Controller
{
    use R2UploadTrait;

    public function handleUpload()
    {
        // Generate unique filename
        $filename = $this->generateUniqueFileName('document.pdf');
        
        // Check if file exists
        if ($this->fileExists('path/to/file.pdf')) {
            // File exists
        }
        
        // Get human readable size
        $size = $this->humanFileSize(125952000); // "120.12 MB"
        
        // Check file type
        if ($this->isImage($mimeType)) {
            // Handle image
        }
    }
}
```

## Configuration Options

The `config/r2.php` file contains all configuration options:

- **max_file_size**: Maximum upload size (default: 5GB)
- **multipart_threshold**: Files larger than this use multipart upload (default: 100MB)
- **part_size**: Size of each part in multipart uploads (default: 10MB)
- **allowed_mime_types**: Array of allowed MIME types
- **presigned_url_expiry**: Default expiry for presigned URLs (default: 1 hour)
- **cache_control**: Default cache control header
- **auto_delete_temp_days**: Auto-delete temporary files after X days

## Security Best Practices

1. **API Token Security**
   - Use one token per bucket
   - Apply minimum required permissions
   - Rotate tokens regularly
   - Never commit tokens to version control

2. **File Validation**
   - Always validate file types
   - Check file sizes before upload
   - Scan for malware if handling user uploads

3. **Access Control**
   - Use presigned URLs for temporary access
   - Set appropriate visibility (private/public)
   - Implement proper authentication

## Troubleshooting

### Common Issues

1. **"The AWS Access Key Id you provided does not exist"**
   - Check your R2_ACCESS_KEY_ID in .env
   - Ensure you're using R2 credentials, not AWS

2. **"Failed to upload file to R2"**
   - Check bucket permissions
   - Verify endpoint URL format
   - Ensure bucket exists

3. **Large files fail to upload**
   - Increase PHP memory_limit
   - Increase max_execution_time
   - Use multipart upload (automatic for files > 100MB)

## References

- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [Laravel Storage Documentation](https://laravel.com/docs/storage)
- [Flysystem AWS S3 Adapter](https://flysystem.thephpleague.com/docs/adapter/aws-s3-v3/) 
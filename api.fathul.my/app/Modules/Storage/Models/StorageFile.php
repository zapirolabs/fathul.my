<?php

namespace Storage\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;

class StorageFile extends Model
{
    use SoftDeletes;

    protected $table = 'storage_files';

    protected $fillable = [
        'file_name',
        'file_path',
        'file_size',
        'mime_type',
        'disk',
        'etag',
        'version_id',
        'metadata',
        'uploaded_by',
        'download_count',
        'last_accessed_at',
    ];

    protected $casts = [
        'metadata' => 'array',
        'file_size' => 'integer',
        'download_count' => 'integer',
        'uploaded_by' => 'integer',
        'last_accessed_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     * Get the user who uploaded the file
     */
    public function uploader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    /**
     * Get the full URL of the file
     */
    public function getUrlAttribute(): string
    {
        return app(\Storage\Services\R2Service::class)->getUrl($this->file_path);
    }

    /**
     * Get temporary URL with expiry
     */
    public function getTemporaryUrl(int $expiry = 3600): string
    {
        return app(\Storage\Services\R2Service::class)->getTemporaryUrl($this->file_path, $expiry);
    }

    /**
     * Get human readable file size
     */
    public function getHumanSizeAttribute(): string
    {
        return $this->formatBytes($this->file_size);
    }

    /**
     * Check if file is an image
     */
    public function getIsImageAttribute(): bool
    {
        return str_starts_with($this->mime_type, 'image/');
    }

    /**
     * Check if file is a video
     */
    public function getIsVideoAttribute(): bool
    {
        return str_starts_with($this->mime_type, 'video/');
    }

    /**
     * Check if file is a document
     */
    public function getIsDocumentAttribute(): bool
    {
        $document_types = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/plain',
            'text/csv',
        ];

        return in_array($this->mime_type, $document_types);
    }

    /**
     * Get file extension
     */
    public function getExtensionAttribute(): string
    {
        return pathinfo($this->file_name, PATHINFO_EXTENSION);
    }

    /**
     * Increment download count
     */
    public function incrementDownloadCount(): void
    {
        $this->increment('download_count');
        $this->update(['last_accessed_at' => now()]);
    }

    /**
     * Scope for files uploaded by a specific user
     */
    public function scopeUploadedBy($query, int $user_id)
    {
        return $query->where('uploaded_by', $user_id);
    }

    /**
     * Scope for files of a specific type
     */
    public function scopeOfType($query, string $mime_type)
    {
        return $query->where('mime_type', 'like', $mime_type . '%');
    }

    /**
     * Scope for files larger than a specific size
     */
    public function scopeLargerThan($query, int $size)
    {
        return $query->where('file_size', '>', $size);
    }

    /**
     * Scope for files smaller than a specific size
     */
    public function scopeSmallerThan($query, int $size)
    {
        return $query->where('file_size', '<', $size);
    }

    /**
     * Scope for recently uploaded files
     */
    public function scopeRecent($query, int $days = 7)
    {
        return $query->where('created_at', '>=', now()->subDays($days));
    }

    /**
     * Format bytes to human readable
     */
    protected function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        
        for ($i = 0; $bytes > 1024; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
} 
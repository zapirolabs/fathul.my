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
        'generated_filename',
        'file_path',
        'file_size',
        'mime_type',
        'disk',
        'etag',
        'metadata',
        'url',
        'uploaded_by',
    ];

    protected $casts = [
        'metadata' => 'array',
        'file_size' => 'integer',
        'uploaded_by' => 'integer',
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
} 
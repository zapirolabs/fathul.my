<?php

namespace Storage\Models;

use Illuminate\Database\Eloquent\Model;

class StorageFile extends Model
{
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
    ];

    protected $casts = [
        'metadata' => 'array',
        'file_size' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
} 
<?php

namespace Storage\Services;

use Illuminate\Support\Facades\Storage;

class S3Service
{
    public function __invoke(string $path, string $file)
    {
        return Storage::disk('s3')->put($path, $file);
    }
}
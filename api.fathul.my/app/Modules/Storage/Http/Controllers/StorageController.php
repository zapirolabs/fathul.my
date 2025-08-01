<?php

namespace Storage\Http\Controllers;

use App\Http\Controllers\MasterController;
use Storage\Requests\StorageRequest;
use Storage\Services\R2Service;
use Storage\Services\S3Service;

class StorageController extends MasterController
{
    public function upload(StorageRequest $request)
    {
        $storage_provider = $request->input('storage_provider');
        $path = $request->input('path');
        $file = $request->file('file');

        $result = match ($storage_provider) {
            'r2' => R2Service::upload($file, $path),
            's3' => S3Service::upload($file, $path),
        };

        return $this->responseWithSystemName([
            'module' => config('storage.name'),
            'version' => config('storage.version'),
            'data' => $result,
        ], $result['success'] ? 200 : 400);
    }
}
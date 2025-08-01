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

        if ($storage_provider === 'r2') {
            $r2_service = new R2Service();
            $result = $r2_service->upload($file, ['path' => $path]);
            
            return $this->responseWithSystemName([
                'module' => config('storage.name'),
                'version' => config('storage.version'),
                'data' => $result,
            ], $result['success'] ? 200 : 400);
        }

        // Handle S3 if needed
        return $this->responseWithSystemName([
            'module' => config('storage.name'),
            'version' => config('storage.version'),
            'data' => [
                'success' => false,
                'error' => 'Storage provider not implemented'
            ],
        ], 400);
    }
}
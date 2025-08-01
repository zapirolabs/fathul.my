<?php

namespace Storage\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorageRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'storage_provider' => 'required|string|in:s3,r2',
            'path' => 'required|string',
            'file' => 'required|file|max:102400', // 100MB max
        ];
    }

    public function messages()
    {
        return [
            'storage_provider.required' => 'storage_provider is required',
            'storage_provider.string' => 'storage_provider must be a string',
            'storage_provider.in' => 'storage_provider must be either s3 or r2',
            'path.required' => 'path is required',
            'path.string' => 'path must be a string',
            'file.required' => 'file is required',
            'file.file' => 'file must be a valid file',
            'file.max' => 'file size must not exceed 100MB',
        ];
    }
}
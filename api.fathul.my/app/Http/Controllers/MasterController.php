<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class MasterController extends Controller
{
    protected string $systemName = 'fathul.my - API';

    protected function responseWithSystemName(array $data = [], int $statusCode = 200): JsonResponse
    {
        return response()->json([
            'system' => $this->systemName,
            'status' => $statusCode,
            'data' => $data
        ], $statusCode);
    }
} 
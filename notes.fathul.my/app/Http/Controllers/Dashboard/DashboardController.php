<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PPZ\S3Service\PPZS3Service;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }

    public function upload(Request $request)
    {
        try {
            // Validate the uploaded file
            $request->validate([
                'file' => 'required|file|max:10240', // 10MB max
            ]);

            if ($request->hasFile('file')) {
                $response = PPZS3Service::upload([
                    'file' => $request->file('file'),
                    'directory' => 'notes/uploads',
                    'tag' => 'note-upload',
                    'description' => 'Notes File Upload',
                    'emp_id' => '196',
                ]);

                if ($response && isset($response['data'])) {
                    return response()->json([
                        'success' => true,
                        'message' => 'File uploaded successfully!',
                        'data' => [
                            'filename' => $response['data']['filename'] ?? null,
                            'original_filename' => $response['data']['original_name'] ?? null,
                            'url' => $response['data']['url'] ?? null,
                        ]
                    ]);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'Upload failed. Please try again.',
                    ], 500);
                }
            }

            return response()->json([
                'success' => false,
                'message' => 'No file was uploaded.',
            ], 400);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed: ' . implode(', ', $e->validator->errors()->all()),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Upload error. Please contact support if the problem persists.',
            ], 500);
        }
    }
}

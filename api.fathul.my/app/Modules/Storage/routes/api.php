<?php

use Storage\Http\Controllers\StorageController;
use Illuminate\Support\Facades\Route;

Route::middleware('api.auth')->group(function () {
    Route::prefix('upload')->group(function () {
        Route::post('/', [StorageController::class, 'upload'])->name('storage.upload');
    });
});
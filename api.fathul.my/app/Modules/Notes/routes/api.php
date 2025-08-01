<?php

use App\Modules\Notes\Http\Controllers\NotesController;
use Illuminate\Support\Facades\Route;

Route::middleware('api.auth')->group(function () {
    Route::prefix('notes')->group(function () {
        Route::get('/test', [NotesController::class, 'test'])->name('notes.test');
    });
});
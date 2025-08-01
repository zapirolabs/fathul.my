<?php

use Notes\Http\Controllers\NotesController;
use Illuminate\Support\Facades\Route;

Route::middleware('api.auth')->group(function () {
    Route::prefix('test')->group(function () {
        Route::get('/', [NotesController::class, 'test'])->name('notes.test');
    });
});
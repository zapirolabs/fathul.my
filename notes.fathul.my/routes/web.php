<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Form\FormController;
use App\Http\Controllers\Dashboard\DashboardController;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
Route::post('/upload', [DashboardController::class, 'upload'])->name('upload');
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Form\FormController;

Route::get('/', [FormController::class, 'index'])->name('form.index');
Route::post('/program', [FormController::class, 'store'])->name('program.store');
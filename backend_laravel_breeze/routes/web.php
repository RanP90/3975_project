<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\VerifyApproved; 
use App\Http\Middleware\AdminMiddleware;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', VerifyApproved::class])->group(function () {
    Route::middleware([AdminMiddleware::class])->group(function () {
        Route::get('/admin/users', [AdminController::class, 'index'])->name('admin.users');
        Route::post('/admin/users/{user}/approve', [AdminController::class, 'approve'])->name('admin.users.approve');
        Route::delete('/admin/users/{user}/reject', [AdminController::class, 'reject'])->name('admin.users.reject');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/not-approved', function () {
    return view('not-approved');
})->name('not-approved');

require __DIR__.'/auth.php';

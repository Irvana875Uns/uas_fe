<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/siswa', [SiswaController::class, 'index'])->middleware('jwt.verify');
Route::get('/siswa/{id}', [SiswaController::class, 'show'])->middleware('jwt.admin');
Route::post('/siswa', [SiswaController::class, 'store'])->middleware('jwt.admin');
Route::put('/siswa/{id}', [SiswaController::class, 'update'])->middleware('jwt.admin');
Route::delete('/siswa/{id}', [SiswaController::class, 'destroy'])->middleware('jwt.admin');
 
Route::post('/login', [AuthController::class, 'login'])->middleware('guest');
Route::post('/register', [AuthController::class, 'register'])->middleware('guest');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('jwt.verify');

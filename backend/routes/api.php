<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiswaController;

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

Route::get('/siswa',[SiswaController::class, 'index'])->middleware('jwt.verify');
Route::get('/siswa/{id}', [SiswaController::class, 'show'])->middleware('jwt.admin');
Route::get('/siswa',[SiswaController::class, 'store'])->middleware('jwt.admin');
Route::get('/siswa{id}', [SiswaController::class, 'update'])->middleware('jwt.admin');
Route::get('/siswa/{id}', [SiswaController::class, 'destory'])->middleware('jwt.admin');

Route::get('/login', [AuthController::class, 'login'])->middleware('guest');
Route::get('/register', [AuthController::class, 'register'])->middleware('guest');
Route::get('/logout', [AuthController::class, 'logout'])->middleware('jwt.verify');

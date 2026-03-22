<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MedicamentoController;

//Usuário
Route::post('login', [AuthController::class, 'loginApi']);

Route::get('/contas', [UsuarioController::class, 'indexApi']);
Route::get('/conta/{id}', [UsuarioController::class, 'showApi']);
Route::post('/conta/adicionar',[UsuarioController::class, 'storeApi']);
Route::delete('/conta/excluir/{id}',[UsuarioController::class, 'destroyApi']);
Route::put('/conta/atualizar/{id}', [UsuarioController::class, 'updateApi']);

Route::middleware('auth:sanctum')->get('/user', [UsuarioController::class, 'perfil']);

Route::post('/medicamento/adicionar', [MedicamentoController::class, 'storeApi']);



Route::middleware('auth:sanctum')->group(function () {
    
    // Perfil do usuário logado
    Route::get('/user', [UsuarioController::class, 'perfil']);

    // Medicamentos (somente para usuário autenticado)
    Route::get('/medicamentos', [MedicamentoController::class, 'indexApi']);
    Route::get('/medicamento/{id}', [MedicamentoController::class, 'show']);
    Route::put('/medicamento/atualizar/{id}', [MedicamentoController::class, 'update']);
    Route::delete('/medicamento/excluir/{id}', [MedicamentoController::class, 'destroyApi']);
});
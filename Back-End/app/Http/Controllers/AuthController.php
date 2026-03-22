<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\UsuarioModel;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginApi(Request $request)
        {
            // Validar os dados
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $usuario = UsuarioModel::where('email', $request->email)->first();
            
            $token = $usuario->createToken('token-name')->plainTextToken;

            if (!$usuario || !Hash::check($request->password, $usuario->password)) {
                return response()->json(['error' => 'Credenciais inválidas'], 401);
            }

            // Gerar um token fake só pra teste
            return response()->json([
                'message' => 'Login bem-sucedido',
                'usuario' => $usuario,
                'token' => $token
            ], 200);
        }
}
<?php

namespace App\Http\Controllers;

use App\Models\UsuarioModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;



class UsuarioController extends Controller
{
    public function indexApi()
    {
        // Retorna todos os usuários
        $usuario = UsuarioModel::all();
        return response()->json($usuario);
    }

    public function perfil(Request $request)
    {
        return response()->json(Auth::user()); // ou Auth::user()
    }
    
    public function storeApi(Request $request)
    {
        $request->validate([
            'nome' => 'required|string',
            'email' => 'required|email|unique:usuario,email', 
            'password' => 'required',
            'altura' => 'required|numeric',
            'peso' => 'required|numeric',
            'foto' => 'nullable|image|max:2048', 
        ]);

        $usuario = new UsuarioModel();
        $usuario->nome = $request->input('nome');
        $usuario->email = $request->input('email');
        $usuario->password = Hash::make($request->input('password')); // Criptografa a senha
        
        $usuario->altura = $request->input('altura');
        $usuario->peso = $request->input('peso');

        if ($request->hasFile('foto')) {
                $imagem = $request->file('foto');
                $novoNome = md5(time()) . '.' . $imagem->extension();
                $caminho = 'fotos/user/' . $novoNome;

                $imagem->move(public_path('fotos/user'), $novoNome);
            } else {
                $caminho = null;
            }

        $usuario->foto = $caminho;
        $usuario->save();

        return response()->json([
            'mensagem' => 'Usuário criado com sucesso!',
            'usuario' => $usuario,
        ], 201);
    }


    
    public function showApi($id)
    {
        $usuario = UsuarioModel::find($id);
        return response()->json($usuario);
    }


    public function updateApi(Request $request, $id)
{
    try {
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'nullable|string|min:6',
            'altura' => 'nullable|numeric',
            'peso' => 'nullable|numeric',
            'foto' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $usuario = UsuarioModel::find($id);
        if (!$usuario) {
            return response()->json(['mensagem' => 'Usuário não encontrado'], 404);
        }

        // Atualiza campos
        $usuario->nome = $request->input('nome');
        $usuario->email = $request->input('email');
        
        if ($request->filled('password')) {
            $usuario->password = Hash::make($request->input('password'));
        }

        $usuario->altura = $request->input('altura');
        $usuario->peso = $request->input('peso');

        if ($request->hasFile('foto')) {
            $imagem = $request->file('foto');
            $novoNome = 'user_'.$id.'_'.time().'.'.$imagem->extension();
            $imagem->move(public_path('fotos/user'), $novoNome);
            
            // Remove a foto antiga se existir
            if ($usuario->foto && file_exists(public_path($usuario->foto))) {
                unlink(public_path($usuario->foto));
            }
            
            $usuario->foto = 'fotos/user/'.$novoNome;
        }

        $usuario->save();

        return response()->json([
            'mensagem' => 'Usuário atualizado com sucesso!',
            'foto' => $usuario->foto // Retorna o novo caminho da foto
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'mensagem' => 'Erro ao atualizar usuário',
            'erro' => $e->getMessage()
        ], 500);
    }
}

    public function destroyApi($id)
    {
        $usuario = UsuarioModel::find($id);

        if ($usuario) {
            $usuario->delete();
            return response()->json(['mensagem' => 'Usuário deletado com sucesso!']);
        }

        return response()->json(['mensagem' => 'Usuário não encontrado'], 404);
    }
}

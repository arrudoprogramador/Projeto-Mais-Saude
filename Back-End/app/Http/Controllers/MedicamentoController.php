<?php

namespace App\Http\Controllers;

use App\Models\Medicamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MedicamentoController extends Controller
{
    public function indexApi()
    {  
        $usuario = Auth::user();
        $medicamentos = $usuario->medicamentos;

        return response()->json($medicamentos);
    }

    public function storeApi(Request $request)
    {
        $medicamento = new Medicamento();
        $medicamento->nome = $request->input('nome');
        $medicamento->horario_inicio = $request->input('horario_inicio');

        if ($request->hasFile('imagem')) {
            $imagem = $request->file('foto');
            $novoNome = md5(time()) . '.' . $imagem->extension();
            $caminho = 'fotos/medicamento/' . $novoNome;

            $imagem->move(public_path('fotos/medicamento'), $novoNome);
        } else {
            $caminho = null;
        }

        $medicamento->imagem = $caminho;

        $medicamento->usuario_id = Auth::id(); 

        $medicamento->save();

        return response()->json([
            'mensagem' => 'Medicamento criado com sucesso!',
            'medicamento' => $medicamento,
        ], 201);
    }

   
    public function show($id)
    {
        $medicamento = Medicamento::where('id', $id)
            ->where('user_id', Auth::id()) 
            ->first();

        if (!$medicamento) {
            return response()->json(['mensagem' => 'Medicamento não encontrado.'], 404);
        }

        return response()->json($medicamento);
    }

    
    public function update(Request $request, $id)
    {
        $medicamento = Medicamento::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        if (!$medicamento) {
            return response()->json(['mensagem' => 'Medicamento não encontrado.'], 404);
        }

        $medicamento->nome = $request->input('nome', $medicamento->nome);
        $medicamento->horario_inicio = $request->input('horario_inicio', $medicamento->horario_inicio);

        if ($request->hasFile('foto')) {
            $imagem = $request->file('foto');
            $novoNome = md5(time()) . '.' . $imagem->extension();
            $caminho = 'fotos/medicamento/' . $novoNome;

            $imagem->move(public_path('fotos/medicamento'), $novoNome);
            $medicamento->foto = $caminho;
        }

        $medicamento->save();

        return response()->json([
            'mensagem' => 'Medicamento atualizado com sucesso!',
            'medicamento' => $medicamento,
        ]);
    }

    // Deleta um medicamento
    public function destroyApi($id)
    {
        $medicamento = Medicamento::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        if ($medicamento) {
            $medicamento->delete();
            return response()->json(['mensagem' => 'Medicamento deletado com sucesso!']);
        }

        return response()->json(['mensagem' => 'Medicamento não encontrado.'], 404);
    }
}

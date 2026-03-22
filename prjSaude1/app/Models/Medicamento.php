<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicamento extends Model
{
    use HasFactory;

    protected $table = 'medicamentos';

    public $fillable = ['id', 'horario_inicio', 'intervalo', 'quantidade_doses', 'imagem', 'usuario_id'];
    
    public function usuario()
    {
        return $this->belongsTo(UsuarioModel::class, 'usuario_id');
    }
}

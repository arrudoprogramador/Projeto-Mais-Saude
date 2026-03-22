<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UsuarioModel extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuario';

    public $fillable = ['id', 'nome', 'email', 'password', 'dataNasc', 'genero', 'altura', 'peso', 'foto'];

   
}

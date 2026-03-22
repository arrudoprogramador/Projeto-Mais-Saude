<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicamentos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->time('horario_inicio');
            $table->time('intervalo');
            $table->integer('quantidade_doses');
            $table->string('imagem')->nullable();

            $table->unsignedBigInteger('usuario_id'); // 👈 nome correto
            $table->foreign('usuario_id')->references('id')->on('usuario')->onDelete('cascade');
    

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medicamentos');
    }
};

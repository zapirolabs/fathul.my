<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('storage_files', function (Blueprint $table) {
            $table->id();
            $table->string('file_name');
            $table->string('generated_filename');
            $table->string('file_path')->unique();
            $table->bigInteger('file_size');
            $table->string('mime_type');
            $table->string('disk')->default('r2');
            $table->string('etag')->nullable();
            $table->json('metadata')->nullable();
            $table->string('url')->nullable();
            $table->timestamps();

            // Indexes for better performance
            $table->index('mime_type');
            $table->index('file_size');
            $table->index('created_at');
            $table->index('disk');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('storage_files');
    }
}; 
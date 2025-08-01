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
            $table->string('file_path')->unique();
            $table->bigInteger('file_size');
            $table->string('mime_type');
            $table->string('disk')->default('r2');
            $table->string('etag')->nullable();
            $table->string('version_id')->nullable();
            $table->json('metadata')->nullable();
            $table->unsignedBigInteger('uploaded_by')->nullable();
            $table->unsignedInteger('download_count')->default(0);
            $table->timestamp('last_accessed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Indexes for better performance
            $table->index('uploaded_by');
            $table->index('mime_type');
            $table->index('file_size');
            $table->index('created_at');
            $table->index(['disk', 'deleted_at']);
            
            // Foreign key constraint
            $table->foreign('uploaded_by')->references('id')->on('users')->onDelete('set null');
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
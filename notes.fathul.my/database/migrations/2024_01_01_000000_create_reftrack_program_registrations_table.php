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
        Schema::create('reftrack_program_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('phone_number');
            $table->string('email');
            $table->integer('age');
            $table->enum('interview_willingness', ['yes', 'no']);
            $table->json('registration_reasons');
            $table->string('registration_reasons_other')->nullable();
            $table->string('commitment_level');
            $table->string('commitment_level_other')->nullable();
            $table->string('program_interest');
            $table->json('selected_programs')->nullable();
            $table->string('intake_batch')->nullable();
            $table->string('python_batch')->nullable();
            $table->string('genai_batch')->nullable();
            $table->string('aws_batch')->nullable();
            $table->string('pahang_connection');
            $table->string('pahang_connection_other')->nullable();
            $table->text('further_inquiries')->nullable();
            $table->string('python_referral_code')->nullable();
            $table->string('genai_referral_code')->nullable();
            $table->string('aws_referral_code')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reftrack_program_registrations');
    }
}; 
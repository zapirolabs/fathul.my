<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone_number',
        'email',
        'age',
        'interview_willingness',
        'registration_reasons',
        'registration_reasons_other',
        'commitment_level',
        'commitment_level_other',
        'program_interest',
        'selected_programs',
        'intake_batch',
        'pahang_connection',
        'pahang_connection_other',
        'further_inquiries',
        'python_referral_code',
        'genai_referral_code',
        'aws_referral_code',
    ];

    protected $casts = [
        'registration_reasons' => 'array',
        'selected_programs' => 'array',
    ];

    /**
     * Generate referral code for a specific program
     */
    public static function generateReferralCode($programCode, $userId)
    {
        return sprintf('REFMFA%02d%02d', $programCode, $userId);
    }

    /**
     * Get program code mapping
     */
    public static function getProgramCodes()
    {
        return [
            'python-basic' => 1,
            'genai-masterclass' => 2,
            'aws-foundational' => 3,
        ];
    }
} 
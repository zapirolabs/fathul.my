<?php

namespace App\Http\Controllers\Form;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Revolution\Google\Sheets\Facades\Sheets;
use App\Models\ReftrackProgramRegistration;

class FormController extends Controller
{
    public function index()
    {
        return Inertia::render('Form');
    }

    public function store(Request $request)
    {
        // Custom validation logic for batch fields
        $rules = [
            'fullName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20|regex:/^[\+]?[0-9\s\-\(\)]+$/',
            'email' => 'required|email:rfc,dns|max:255',
            'age' => 'required|integer|min:18|max:35',
            'interviewWillingness' => 'required|in:yes,no',
            'registrationReasons' => 'required|array|min:1',
            'registrationReasons.*' => 'in:upskill,certificate,job,other',
            'registrationReasonsOther' => 'required_if:registrationReasons.*,other|max:255',
            'commitmentLevel' => 'required|in:fully-committed,need-info,not-sure,other-commitment',
            'commitmentLevelOther' => 'required_if:commitmentLevel,other-commitment|max:255',
            'programInterest' => 'required|in:python-basic,genai-masterclass,aws-foundational,more-than-one',
            'pahangConnection' => 'required|in:born-pahang,living-pahang,parents-pahang,other-pahang',
            'pahangConnectionOther' => 'required_if:pahangConnection,other-pahang|max:255',
            'furtherInquiries' => 'nullable|string|max:1000',
        ];

        // Add conditional validation based on program selection
        $programInterest = $request->input('programInterest');
        $selectedPrograms = $request->input('selectedPrograms', []);

        if ($programInterest === 'more-than-one') {
            $rules['selectedPrograms'] = 'required|array|min:1';
            $rules['selectedPrograms.*'] = 'in:python-basic,genai-masterclass,aws-foundational';
            
            // Add batch validation for selected programs
            if (in_array('python-basic', $selectedPrograms)) {
                $rules['pythonBatch'] = 'required|in:batch-1,batch-2,batch-3';
            }
            if (in_array('genai-masterclass', $selectedPrograms)) {
                $rules['genaiBatch'] = 'required|in:batch-2,batch-3,batch-4';
            }
            if (in_array('aws-foundational', $selectedPrograms)) {
                $rules['awsBatch'] = 'required|in:batch-1,batch-2,batch-3';
            }
        } else {
            // Single program selection
            if ($programInterest === 'python-basic') {
                $rules['pythonBatch'] = 'required|in:batch-1,batch-2,batch-3';
            } elseif ($programInterest === 'genai-masterclass') {
                $rules['genaiBatch'] = 'required|in:batch-2,batch-3,batch-4';
            } elseif ($programInterest === 'aws-foundational') {
                $rules['awsBatch'] = 'required|in:batch-1,batch-2,batch-3';
            }
        }

        $request->validate($rules, [
            'fullName.required' => 'Sila masukkan nama penuh anda.',
            'fullName.string' => 'Nama penuh mestilah dalam format teks.',
            'fullName.max' => 'Nama penuh tidak boleh melebihi 255 aksara.',
            'phoneNumber.required' => 'Sila masukkan nombor telefon anda.',
            'phoneNumber.string' => 'Nombor telefon mestilah dalam format teks.',
            'phoneNumber.max' => 'Nombor telefon tidak boleh melebihi 20 aksara.',
            'phoneNumber.regex' => 'Sila masukkan nombor telefon yang sah (contoh: 012-3456789).',
            'email.required' => 'Sila masukkan alamat emel anda.',
            'email.email' => 'Sila masukkan alamat emel yang sah dan boleh menerima emel.',
            'email.max' => 'Alamat emel tidak boleh melebihi 255 aksara.',
            'age.required' => 'Sila masukkan umur anda.',
            'age.integer' => 'Umur mestilah dalam bentuk nombor.',
            'age.min' => 'Umur minimum adalah 18 tahun.',
            'age.max' => 'Umur maksimum adalah 35 tahun.',
            'interviewWillingness.required' => 'Sila pilih sama ada anda bersedia untuk ditemuduga atau tidak.',
            'interviewWillingness.in' => 'Sila pilih pilihan yang sah.',
            'registrationReasons.required' => 'Sila pilih sekurang-kurangnya satu sebab pendaftaran.',
            'registrationReasons.min' => 'Sila pilih sekurang-kurangnya satu sebab pendaftaran.',
            'registrationReasons.*.in' => 'Sila pilih sebab pendaftaran yang sah.',
            'registrationReasonsOther.required_if' => 'Sila nyatakan sebab lain untuk pendaftaran.',
            'registrationReasonsOther.max' => 'Sebab lain tidak boleh melebihi 255 aksara.',
            'commitmentLevel.required' => 'Sila pilih tahap komitmen anda untuk latihan 1 bulan ini.',
            'commitmentLevel.in' => 'Sila pilih tahap komitmen yang sah.',
            'commitmentLevelOther.required_if' => 'Sila nyatakan tahap komitmen lain.',
            'commitmentLevelOther.max' => 'Tahap komitmen lain tidak boleh melebihi 255 aksara.',
            'programInterest.required' => 'Sila pilih program yang anda minati.',
            'programInterest.in' => 'Sila pilih program yang sah.',
            'selectedPrograms.required' => 'Sila pilih sekurang-kurangnya satu program.',
            'selectedPrograms.min' => 'Sila pilih sekurang-kurangnya satu program.',
            'selectedPrograms.*.in' => 'Sila pilih program yang sah.',
            'pythonBatch.required' => 'Sila pilih batch intake untuk program Python.',
            'pythonBatch.in' => 'Sila pilih batch yang sah untuk program Python.',
            'genaiBatch.required' => 'Sila pilih batch intake untuk program GenAI.',
            'genaiBatch.in' => 'Sila pilih batch yang sah untuk program GenAI.',
            'awsBatch.required' => 'Sila pilih batch intake untuk program AWS.',
            'awsBatch.in' => 'Sila pilih batch yang sah untuk program AWS.',
            'pahangConnection.required' => 'Sila pilih kaitan anda dengan negeri Pahang.',
            'pahangConnection.in' => 'Sila pilih salah satu pilihan yang disediakan.',
            'pahangConnectionOther.required_if' => 'Sila nyatakan kaitan anda dengan negeri Pahang.',
            'pahangConnectionOther.max' => 'Maklumat tidak boleh melebihi 255 aksara.',
            'furtherInquiries.max' => 'Further inquiries tidak boleh melebihi 1000 aksara.',
        ]);

        $fullName = $request->input('fullName');
        $phoneNumber = $request->input('phoneNumber');
        $email = $request->input('email');
        $age = $request->input('age');
        $interviewWillingness = $request->input('interviewWillingness');
        $registrationReasons = $request->input('registrationReasons', []);
        $registrationReasonsOther = $request->input('registrationReasonsOther');
        $commitmentLevel = $request->input('commitmentLevel');
        $commitmentLevelOther = $request->input('commitmentLevelOther');
        $programInterest = $request->input('programInterest');
        $selectedPrograms = $request->input('selectedPrograms', []);
        $intakeBatch = $request->input('intakeBatch'); // This will be null for single program
        $pythonBatch = $request->input('pythonBatch');
        $genaiBatch = $request->input('genaiBatch');
        $awsBatch = $request->input('awsBatch');
        $pahangConnection = $request->input('pahangConnection');
        $pahangConnectionOther = $request->input('pahangConnectionOther');
        $furtherInquiries = $request->input('furtherInquiries');

        // Map registration reasons to English
        $reasonsMapping = [
            'upskill' => 'To upskill and learn something new',
            'certificate' => 'To earn a recognised certificate',
            'job' => 'To improve my chances of getting a job',
            'other' => $registrationReasonsOther ?: 'Other'
        ];

        $mappedReasons = [];
        foreach ($registrationReasons as $reason) {
            $mappedReasons[] = $reasonsMapping[$reason] ?? $reason;
        }
        $finalReasons = implode(', ', $mappedReasons);

        // Map commitment level to English
        $commitmentMapping = [
            'fully-committed' => 'Yes, I\'m fully committed',
            'need-info' => 'I need more information before deciding',
            'not-sure' => 'Not sure',
            'other-commitment' => $commitmentLevelOther ?: 'Other'
        ];

        $finalCommitmentValue = $commitmentMapping[$commitmentLevel] ?? $commitmentLevel;

        // Map program interest to English
        $programMapping = [
            'python-basic' => 'Python Basic Programming',
            'genai-masterclass' => 'GenAI Masterclass',
            'aws-foundational' => 'AWS Foundational Certificate',
            'more-than-one' => 'More than 1 program'
        ];

        $finalProgramValue = $programMapping[$programInterest] ?? $programInterest;

        // Map Pahang connection to English
        $pahangMapping = [
            'born-pahang' => 'Yes, I was born in Pahang',
            'living-pahang' => 'I am currently residing in Pahang',
            'parents-pahang' => 'Both of my parents are from Pahang',
            'other-pahang' => $pahangConnectionOther ?: 'Other'
        ];

        $finalPahangValue = $pahangMapping[$pahangConnection] ?? $pahangConnection;

        // Map interview willingness to English
        $interviewMapping = [
            'yes' => 'Yes',
            'no' => 'No'
        ];

        $finalInterviewValue = $interviewMapping[$interviewWillingness] ?? $interviewWillingness;

        // Map intake batch to English
        $batchMapping = [
            'batch-1' => 'Batch 1',
            'batch-2' => 'Batch 2', 
            'batch-3' => 'Batch 3',
            'batch-4' => 'Batch 4',
            'none-above' => 'None above/Other Program'
        ];

        $finalBatchValue = $batchMapping[$intakeBatch] ?? $intakeBatch;

        // Generate timestamp in Malaysia timezone with exact format: 08/07/2025 09:24:34
        $timestamp = Carbon::now('Asia/Kuala_Lumpur')->format('d/m/Y H:i:s');

        // Create database record first to get the auto-increment ID
        $registration = ReftrackProgramRegistration::create([
            'full_name' => $fullName,
            'phone_number' => $phoneNumber,
            'email' => $email,
            'age' => $age,
            'interview_willingness' => $interviewWillingness,
            'registration_reasons' => $registrationReasons,
            'registration_reasons_other' => $registrationReasonsOther,
            'commitment_level' => $commitmentLevel,
            'commitment_level_other' => $commitmentLevelOther,
            'program_interest' => $programInterest,
            'selected_programs' => $selectedPrograms,
            'intake_batch' => $intakeBatch, // Store null for single program
            'python_batch' => $pythonBatch,
            'genai_batch' => $genaiBatch,
            'aws_batch' => $awsBatch,
            'pahang_connection' => $pahangConnection,
            'pahang_connection_other' => $pahangConnectionOther,
            'further_inquiries' => $furtherInquiries,
        ]);

        // Generate referral codes based on selected programs
        $programCodes = ReftrackProgramRegistration::getProgramCodes();
        $pythonReferralCode = '';
        $genaiReferralCode = '';
        $awsReferralCode = '';
        
        if ($programInterest === 'more-than-one') {
            // For multi-program selection, generate referral codes for selected programs
            if (in_array('python-basic', $selectedPrograms)) {
                $pythonReferralCode = ReftrackProgramRegistration::generateReferralCode($programCodes['python-basic'], $registration->id);
            }
            if (in_array('genai-masterclass', $selectedPrograms)) {
                $genaiReferralCode = ReftrackProgramRegistration::generateReferralCode($programCodes['genai-masterclass'], $registration->id);
            }
            if (in_array('aws-foundational', $selectedPrograms)) {
                $awsReferralCode = ReftrackProgramRegistration::generateReferralCode($programCodes['aws-foundational'], $registration->id);
            }
        } else {
            // For single program selection
            if ($programInterest === 'python-basic') {
                $pythonReferralCode = ReftrackProgramRegistration::generateReferralCode($programCodes['python-basic'], $registration->id);
            } elseif ($programInterest === 'genai-masterclass') {
                $genaiReferralCode = ReftrackProgramRegistration::generateReferralCode($programCodes['genai-masterclass'], $registration->id);
            } elseif ($programInterest === 'aws-foundational') {
                $awsReferralCode = ReftrackProgramRegistration::generateReferralCode($programCodes['aws-foundational'], $registration->id);
            }
        }

        // Update the registration with referral codes
        $registration->update([
            'python_referral_code' => $pythonReferralCode,
            'genai_referral_code' => $genaiReferralCode,
            'aws_referral_code' => $awsReferralCode,
        ]);

        // Determine batch column based on program type
        $pythonBatchValue = '';
        $genaiBatchValue = '';
        $awsBatchValue = '';
        
        if ($programInterest === 'more-than-one') {
            // For multi-program selection, use individual batch values
            if (in_array('python-basic', $selectedPrograms) && $pythonBatch) {
                $pythonBatchValue = $batchMapping[$pythonBatch] ?? $pythonBatch;
            }
            if (in_array('genai-masterclass', $selectedPrograms) && $genaiBatch) {
                $genaiBatchValue = $batchMapping[$genaiBatch] ?? $genaiBatch;
            }
            if (in_array('aws-foundational', $selectedPrograms) && $awsBatch) {
                $awsBatchValue = $batchMapping[$awsBatch] ?? $awsBatch;
            }
        } else {
            // For single program selection, use individual batch values
            if ($programInterest === 'python-basic' && $pythonBatch) {
                $pythonBatchValue = $batchMapping[$pythonBatch] ?? $pythonBatch;
            } elseif ($programInterest === 'genai-masterclass' && $genaiBatch) {
                $genaiBatchValue = $batchMapping[$genaiBatch] ?? $genaiBatch;
            } elseif ($programInterest === 'aws-foundational' && $awsBatch) {
                $awsBatchValue = $batchMapping[$awsBatch] ?? $awsBatch;
            }
        }

        $rowData = [
            $timestamp, // A - Timestamp
            $email, // B - Email
            $fullName, // C - Full Name
            $phoneNumber, // D - Phone
            $age, // E - Age
            $finalReasons, // F - Registration Reasons
            $finalCommitmentValue, // G - Commitment Level
            $finalPahangValue, // H - Pahang Connection
            $finalProgramValue, // I - Program Interest
            $pythonBatchValue, // J - Python Intake Batch
            $pythonReferralCode, // K - Python Referral Code
            '', // L - Reserved
            $genaiBatchValue, // M - GenAI Intake Batch
            $genaiReferralCode, // N - GenAI Referral Code
            '', // O - Reserved
            $awsBatchValue, // P - AWS Intake Batch
            $awsReferralCode, // Q - AWS Referral Code
            $furtherInquiries ?: '', // R - Further Inquiries
            $finalInterviewValue, // S - Interview Willingness
        ];

        Sheets::spreadsheet(env('GOOGLE_SPREADSHEET_ID'))
            ->sheet('PJK Registration form')
            ->append([$rowData]);

        // Prepare referral codes for display
        $referralCodes = [];
        if ($pythonReferralCode) {
            $referralCodes[] = [
                'program' => 'Python Basic Programming',
                'code' => $pythonReferralCode
            ];
        }
        if ($genaiReferralCode) {
            $referralCodes[] = [
                'program' => 'GenAI Masterclass',
                'code' => $genaiReferralCode
            ];
        }
        if ($awsReferralCode) {
            $referralCodes[] = [
                'program' => 'AWS Foundational Certificate',
                'code' => $awsReferralCode
            ];
        }

        return Inertia::render('Success', [
            'referralCodes' => $referralCodes,
            'userName' => $fullName
        ]);
    }
}

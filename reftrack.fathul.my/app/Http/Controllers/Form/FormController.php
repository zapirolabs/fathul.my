<?php

namespace App\Http\Controllers\Form;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Revolution\Google\Sheets\Facades\Sheets;

class FormController extends Controller
{
    public function index()
    {
        return Inertia::render('Form');
    }

    public function store(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20',
            'email' => 'required|email:rfc,dns|max:255',
            'age' => 'required|integer|min:18|max:35',
            'registrationReasons' => 'required|array|min:1',
            'registrationReasons.*' => 'in:upskill,certificate,job,other',
            'registrationReasonsOther' => 'required_if:registrationReasons.*,other|max:255',
            'commitmentLevel' => 'required|in:fully-committed,need-info,not-sure,other-commitment',
            'commitmentLevelOther' => 'required_if:commitmentLevel,other-commitment|max:255',
            'programInterest' => 'required|in:python-basic,genai-masterclass,aws-foundational,more-than-one',
            'pahangConnection' => 'required|in:born-pahang,living-pahang,parents-pahang,other-pahang',
            'pahangConnectionOther' => 'required_if:pahangConnection,other-pahang|max:255',
        ], [
            'fullName.required' => 'Sila masukkan nama penuh anda.',
            'fullName.string' => 'Nama penuh mestilah dalam format teks.',
            'fullName.max' => 'Nama penuh tidak boleh melebihi 255 aksara.',
            'phoneNumber.required' => 'Sila masukkan nombor telefon anda.',
            'phoneNumber.string' => 'Nombor telefon mestilah dalam format teks.',
            'phoneNumber.max' => 'Nombor telefon tidak boleh melebihi 20 aksara.',
            'email.required' => 'Sila masukkan alamat emel anda.',
            'email.email' => 'Sila masukkan alamat emel yang sah dan boleh menerima emel.',
            'email.max' => 'Alamat emel tidak boleh melebihi 255 aksara.',
            'age.required' => 'Sila masukkan umur anda.',
            'age.integer' => 'Umur mestilah dalam bentuk nombor.',
            'age.min' => 'Umur minimum adalah 18 tahun.',
            'age.max' => 'Umur maksimum adalah 35 tahun.',
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
            'pahangConnection.required' => 'Sila pilih kaitan anda dengan negeri Pahang.',
            'pahangConnection.in' => 'Sila pilih salah satu pilihan yang disediakan.',
            'pahangConnectionOther.required_if' => 'Sila nyatakan kaitan anda dengan negeri Pahang.',
            'pahangConnectionOther.max' => 'Maklumat tidak boleh melebihi 255 aksara.',
        ]);

        $fullName = $request->input('fullName');
        $phoneNumber = $request->input('phoneNumber');
        $email = $request->input('email');
        $age = $request->input('age');
        $registrationReasons = $request->input('registrationReasons', []);
        $registrationReasonsOther = $request->input('registrationReasonsOther');
        $commitmentLevel = $request->input('commitmentLevel');
        $commitmentLevelOther = $request->input('commitmentLevelOther');
        $programInterest = $request->input('programInterest');
        $pahangConnection = $request->input('pahangConnection');
        $pahangConnectionOther = $request->input('pahangConnectionOther');

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

        // Generate timestamp in Malaysia timezone with exact format: 08/07/2025 09:24:34
        $timestamp = Carbon::now('Asia/Kuala_Lumpur')->format('d/m/Y H:i:s');

        $rowData = [
            $timestamp, // A - Timestamp
            $email, // B - Email
            $fullName, // C - Full Name
            $phoneNumber, // D - Phone
            $age, // E - Age
            $finalReasons, // F - Registration Reasons
            $finalCommitmentValue, // G - Commitment Level
            $finalPahangValue, // H - Pahang Connection
            $finalProgramValue // I - Program Interest
        ];

        Sheets::spreadsheet(env('GOOGLE_SPREADSHEET_ID'))
            ->sheet('PJK Registration form')
            ->append([$rowData]);

        return Inertia::render('Success');
    }
}

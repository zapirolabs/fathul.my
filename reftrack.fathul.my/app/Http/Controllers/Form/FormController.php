<?php

namespace App\Http\Controllers\Form;

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
            'pahangConnection.required' => 'Sila pilih kaitan anda dengan negeri Pahang.',
            'pahangConnection.in' => 'Sila pilih salah satu pilihan yang disediakan.',
            'pahangConnectionOther.required_if' => 'Sila nyatakan kaitan anda dengan negeri Pahang.',
            'pahangConnectionOther.max' => 'Maklumat tidak boleh melebihi 255 aksara.',
        ]);

        $fullName = $request->input('fullName');
        $phoneNumber = $request->input('phoneNumber');
        $email = $request->input('email');
        $age = $request->input('age');
        $pahangConnection = $request->input('pahangConnection');
        $pahangConnectionOther = $request->input('pahangConnectionOther');

        $valueMapping = [
            'born-pahang' => 'Yes, I was born in Pahang',
            'living-pahang' => 'I am currently residing in Pahang',
            'parents-pahang' => 'Both of my parents are from Pahang',
            'other-pahang' => $pahangConnectionOther ?: 'Other'
        ];

        $finalValue = $valueMapping[$pahangConnection] ?? $pahangConnection;

        // Store: A=?, B=Email, C=Full Name, D=Phone, E=Age, H=Pahang Connection
        $rowData = ['', $email, $fullName, $phoneNumber, $age, '', '', $finalValue];

        Sheets::spreadsheet(env('GOOGLE_SPREADSHEET_ID'))
            ->sheet('PJK Registration form')
            ->append([$rowData]);

        return Inertia::render('Success');
    }
}

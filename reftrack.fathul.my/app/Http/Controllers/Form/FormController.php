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
            'pahangConnection' => 'required|in:born-pahang,living-pahang,parents-pahang,other-pahang',
            'pahangConnectionOther' => 'required_if:pahangConnection,other-pahang|max:255',
        ], [
            'pahangConnection.required' => 'Sila pilih kaitan anda dengan negeri Pahang.',
            'pahangConnection.in' => 'Sila pilih salah satu pilihan yang disediakan.',
            'pahangConnectionOther.required_if' => 'Sila nyatakan kaitan anda dengan negeri Pahang.',
            'pahangConnectionOther.max' => 'Maklumat tidak boleh melebihi 255 aksara.',
        ]);

        $pahangConnection = $request->input('pahangConnection');
        $pahangConnectionOther = $request->input('pahangConnectionOther');

        $valueMapping = [
            'born-pahang' => 'Yes, I was born in Pahang',
            'living-pahang' => 'I am currently residing in Pahang',
            'parents-pahang' => 'Both of my parents are from Pahang',
            'other-pahang' => $pahangConnectionOther ?: 'Other'
        ];

        $finalValue = $valueMapping[$pahangConnection] ?? $pahangConnection;

        $rowData = ['', '', '', '', '', '', '', $finalValue];

        Sheets::spreadsheet(env('GOOGLE_SPREADSHEET_ID'))
            ->sheet('PJK Registration form')
            ->append([$rowData]);

        return Inertia::render('Success');
    }
}

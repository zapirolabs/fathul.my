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
        $pahangConnection = $request->input('pahangConnection');
        $pahangConnectionOther = $request->input('pahangConnectionOther');

        // Prepare the data for column H specifically
        $finalValue = $pahangConnection;
        
        // If "other" was selected, include the custom text
        if ($pahangConnection === 'other-pahang' && $pahangConnectionOther) {
            $finalValue = $pahangConnectionOther;
        }

        // Insert data specifically in column H (8th column)
        // We need to provide empty values for columns A-G, then our value for H
        $rowData = ['', '', '', '', '', '', '', $finalValue];
        dd(config('google.service'));
        // Append to Google Sheets
        Sheets::spreadsheet(env('GOOGLE_SPREADSHEET_ID'))
            ->sheet('PJK Registration form')
            ->append([$rowData]);

        return response()->json(['success' => true]);
    }
}

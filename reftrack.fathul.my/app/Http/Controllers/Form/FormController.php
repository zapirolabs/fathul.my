<?php

namespace App\Http\Controllers\Form;

use Inertia\Inertia;
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

        // Prepare the data for Google Sheets
        $rowData = [$pahangConnection];

        // If "other" was selected, include the custom text
        if ($pahangConnection === 'other-pahang' && $pahangConnectionOther) {
            $rowData[] = $pahangConnectionOther;
        }

        // Append to Google Sheets
        Sheets::spreadsheet(env('GOOGLE_SPREADSHEET_ID'))
            ->sheet('Sheet1')
            ->append([$rowData]);

        return response()->json(['success' => true]);
    }
}

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
        return Inertia::render('Dashboard');
    }
}

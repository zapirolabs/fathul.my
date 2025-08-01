<?php

namespace Notes\Http\Controllers;

use App\Http\Controllers\MasterController;
use Illuminate\Http\Request;

class NotesController extends MasterController
{
    public function test()
    {
        return $this->responseWithSystemName([
            'module' => config('notes.name'),
            'version' => config('notes.version'),
            'data' => 'test',
        ], 200);
    }
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Schema;
use PPZ\S3Service\PPZS3Service;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user()->idejen;
        $infoProfile = null;
        $kontrakProfile = null;
        $invoiceProfile = null;

        try {
            $infoProfile = DB::select("select KOD,NAMA,ALAMAT,BANDAR,BANDAR2,POSKOD,
                          NEGERI,NM_PEGAWAI,NM_JAWATAN,NO_TEL,NOFAX,EMAIL,STATUS
                          from spz_ahliagen
                          where id = '{$user}'
                          and status='1'");

            $kontrakProfile = DB::select("select tempohdari,tempohhingga,kom
                           from SPZ_AHLIAGEN_KON
                           where idagen = '{$user}' order by tempohhingga desc");

            $invoiceProfile = DB::select("select *
                          from spz_ahliagen_invoice
                          where idm = '{$user}'");

        } catch (\Exception $e) {
            toast()->error('Database error. Hubungi Unit ICT untuk bantuan. ' . $e->getMessage());
        }

        return view('profile.index', compact('infoProfile', 'kontrakProfile', 'invoiceProfile'));
    }

    public function simpan_kemaskini(Request $request)
    {
        $user = auth()->user()->idejen;
        try {
            $updateProfile = DB::table('spz_ahliagen')
                ->where('id', $user)
                ->where('kod', $request->kod)
                ->update([
                    'nama' => $request->nama,
                    'alamat' => $request->alamat,
                    'bandar' => $request->bandar,
                    'bandar2' => $request->bandar2,
                    'poskod' => $request->poskod,
                    'nm_pegawai' => $request->nmPegawai,
                    'nm_jawatan' => $request->nmJawatan,
                    'no_tel' => $request->no_tel,
                    'nofax' => $request->nofax,
                    'email' => $request->email,
                    'tkhupdate' => date('Y-m-d'),
                    'userupdate' => 'zoeejen',
                ]);

            toast()->success('Kemaskini berjaya!');
        } catch (\Exception $e) {
            toast()->error('Database error. Hubungi Unit ICT untuk bantuan. ' . $e->getMessage());
        }

        return redirect()->route('profile');
    }

    public function simpan_invoice(Request $request)
    {
        $idm = auth()->user()->idejen;
        $id = DB::table('spz_ahliagen_invoice')
            ->orderByRaw('to_number(id) DESC')
            ->first();

        if ($id == null) {
            $newid = 1;
        } else {
            $newid = $id->id + 1;
        }

        // Get user's name from spz_ahliagen table
        $userInfo = DB::table('spz_ahliagen')
            ->where('id', $idm)
            ->first();

        $data = [
            'id' => $newid,
            'idm' => $idm,
            'nama' => $userInfo->nama,
            'no_dftr_perniagaan' => $request->no_dftr_perniagaan,
            'tin_no' => $request->tin_no,
            'sst_no' => $request->sst_no,
            'no_dftr_tourism_tax' => $request->no_dftr_tourism_tax,
            'msic_code' => $request->msic_code,
            'jenis_perniagaan' => $request->jenis_perniagaan,
          /*  'email' => $request->email,
            'no_tel' => $request->no_tel,
            'alamat1' => $request->alamat1,
            'alamat2' => $request->alamat2,
            'poskod' => $request->poskod,
            'bandar' => $request->bandar,
            'negeri' => $request->negeri,*/
            'qr' => $request->qr,
        ];

        $request->validate([
            'qr' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Handle QR code file upload
        if ($request->hasFile('qr')) {
            $response = PPZS3Service::upload([
                'file' => $request->file('qr'),
                'directory' => 'e-ejen/qr',
                'tag' => 'qr',
                'description' => 'QR E-Ejen',
                'emp_id' => $idm,
            ]);
            if ($response && isset($response['data'])) {
                $data['filename'] = $response['data']['filename'] ?? null;
                $data['original_filename'] = $response['data']['original_name'] ?? null;
                $data['url'] = $response['data']['url'] ?? null;
                $data['qr'] = $response['data']['filename'] ?? null; // Ensure qr field is updated
            }
        }

        try {
            // Check if record exists for this idm
            $exists = DB::table('spz_ahliagen_invoice')
                ->where('idm', $idm)
                ->exists();

            if ($exists) {
                // Update existing record
                DB::table('spz_ahliagen_invoice')
                    ->where('idm', $idm)
                    ->update($data);
            } else {
                // Insert new record
                $nextId = DB::select("SELECT spz_ahliagen_invoice_seq.NEXTVAL as id FROM dual")[0]->id;
                $data['id'] = $nextId;
                DB::table('spz_ahliagen_invoice')->insert($data);
            }

            toast()->success('Kemaskini berjaya!');
        } catch (\Exception $e) {
            toast()->error('Database error. Hubungi Unit ICT untuk bantuan. ' . $e->getMessage());
        }

        return redirect()->back();
    }
}

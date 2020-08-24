<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SecurityHomeController extends Controller
{
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:security');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function index()
    {
        return view('security.home');
    }
}

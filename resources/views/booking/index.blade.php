@extends('layouts.app')
@section('content')
    <main class="container p-3 py-5 p-md-5">
        <div class="text-center pb-5">
            <p class="fs-header">Honourable of the federal republic of Nigeria</p>
            <p class="fs-header">Hon. {!! ucwords($userFullname) !!}</p>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="wd wd-700 bg-white">
                <div class="booking__align-header">
                    <h3>Schedule A Meeting</h3>
                </div>
                <div class="booking__align-body">
                    <div class="pb-4">
                        <p>
                            Please select the date and time most convenient for you. Do ensure
                            you do not select a day which falls on a weekend.
                        </p>
                    </div>
                    <div class="row card-dashboard">
                        <div class="col-md-4">
                            <a href="{{$username}}/15min" class="text-gray cursor-pointer">
                                <div class="card">
                                    <div class="d-flex justify-content-between">
                                        <div class="card-dashboard-icon d-content-center pink">15</div>
                                        <div class="card-dashboard-text">
                                            <p>Minute Meeting</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mt-4 mt-md-0">
                            <a href="{{$username}}/30min" class="text-gray cursor-pointer">
                                <div class="card">
                                    <div class="d-flex justify-content-between">
                                        <div class="card-dashboard-icon d-content-center indigo">30</div>
                                        <div class="card-dashboard-text">
                                            <p>Minute Meeting</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mt-4 mt-md-0">
                            <a href="{{$username}}/60min" class="text-gray cursor-pointer">
                                <div class="card">
                                    <div class="d-flex justify-content-between">
                                        <div class="card-dashboard-icon d-content-center green">60</div>
                                        <div class="card-dashboard-text">
                                            <p>Minute Meeting</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection()
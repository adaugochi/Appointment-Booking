@extends('layouts.app')
@section('content')
    <div>
        <div class="container">
            <div class="row ht-100v align-items-center justify-content-center">
                <div class="col-md-10 mx-auto">
                    <div class="img-wrapper">
                        <img src="/uploads/profile/{{$imageURL}}" class="img-wrapper_circle">
                    </div>
                    <p class="fs-20 text-center">{{ $welcomeMessage }}</p>
                    {{--<div class="fs-header text-center">Hon. {!! $userFullname !!}</div>--}}
                    <div class="bg-white">
                        <div class="booking__align-header text-center">
                            <h3>Schedule A Meeting</h3>
                        </div>
                        <div class="booking__align-body">
                            <div class="pb-4 text-center">
                                <p>
                                    Please select the date and time most convenient for you. Do ensure
                                    you do not select a day which falls on a weekend.
                                </p>
                            </div>
                            <div class="row card-dashboard">
                                <div class="col-md-6 col-lg-4">
                                    <a href="{{$username}}/15min" class="text-gray cursor-pointer">
                                        <div class="card">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-dashboard-icon d-content-center gray">15</div>
                                                <div class="card-dashboard-text">
                                                    <p>Minute Meeting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-4 mt-md-0">
                                    <a href="{{$username}}/30min" class="text-gray cursor-pointer">
                                        <div class="card">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-dashboard-icon d-content-center gray">30</div>
                                                <div class="card-dashboard-text">
                                                    <p>Minute Meeting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-4 mt-lg-0 mx-auto mx-lg-0">
                                    <a href="{{$username}}/60min" class="text-gray cursor-pointer">
                                        <div class="card">
                                            <div class="d-flex justify-content-between">
                                                <div class="card-dashboard-icon d-content-center gray">60</div>
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
            </div>
        </div>
    </div>
@endsection()
@extends('layouts.app')
@section('content')
    <main class="container py-5 px-2">
        <div class="text-center">
            <div class="d-md-flex align-items-center justify-content-center m-1">
                <div class="wd wd-md-700 bg-white mb-5" id="pick_date">
                    <div class="booking__align-header">
                        <div class="mx-auto">
                            <i class="fa fa-check fs-icon-check text-success" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="px-3 py-5">
                        <div class="row">
                            <div class="mx-auto col-md-8 form_wrapper">
                                <h4>
                                    Appointment scheduling with {!! ucwords($userFullname) !!} was successful.
                                </h4>
                                <p>
                                    Your appointment is being reviewed and you will receive a
                                    <strong>confirmation code</strong> via sms if confirmed.
                                    NB: This appointment can be confirmed, cancelled, or re-scheduled.
                                </p>
                                <div class="text-success">
                                    Date : {{ \App\helpers\Utils::formatDate($scheduleDate) }}
                                </div>
                                <p class="text-success">
                                    Time : {{ \App\helpers\Utils::convertToMinutesIntervals($scheduleTime, $duration) }}
                                </p>
                                <a href="/{{$username}}" class="btn btn-brand-outline-pry btn-wd-100">
                                    Schedule Another Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection()
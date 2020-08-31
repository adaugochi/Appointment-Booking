@extends('layouts.rep')
@section('title', 'Details')
@section('content')
    <section class="py-4">
        <div class="clearfix">
            <div class="row">
                <div class="col-md-4">
                    <p class="fs-22">View Details</p>
                </div>
                <div class="col-md-8">
                    @include('partials.edit-availability')
                </div>
            </div>
        </div>
    </section>

    <div class="row pb-5">
        <div class="col-lg-10 mx-auto">
            <div class="d-flex">
                <button class="btn btn-link">
                    <i class="fa fa-link" aria-hidden="true"></i>
                </button>
                <div class="pl-2 pl-md-3">
                    <div>{{ auth()->user()->getFullName() }}</div>
                    <a href="{{ env('BASE_URL') }}{{ $user->username }}"
                       class="overflow-wrap text-brand-primary text-underline" target="_blank">
                        {{ env('BASE_URL') }}{{ $user->username }}
                    </a>
                </div>
            </div>
            <div class="card bd-0 mt-4 mt-md-5">
                <div class="card__title fs-20 pb-1">
                    <i class="fa fa-eye pr-2 card__icon green" aria-hidden="true"></i>
                    <span>View Appointment Detail</span>
                </div>
                <hr>
                <div>
                    <p><strong>Name:</strong> {{ $schedule->visitors_name }}</p>
                    <p><strong>Phone Number:</strong> {{ $schedule->visitors_phone_number }}</p>
                    <p>
                        <strong>Date Schedule Appointment For:</strong>
                        {{ \App\helpers\Utils::formatDate($schedule->schedule_date) }}
                    </p>
                    <p>
                        <strong>Time Schedule Appointment For:</strong>
                        {{ \App\helpers\Utils::formatTime($schedule->schedule_time) }}
                    </p>
                    <div>
                        <label><strong>Reason For Appointment:</strong></label>
                        <p>{{ $schedule->reason_for_visit }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

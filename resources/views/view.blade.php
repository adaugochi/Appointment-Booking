@extends('layouts.main')
@section('title', 'Dashboard')
@section('header-breadcrumb')
    <li>Dashboard</li>
    <li><a href="{{ route('home') }}">My Appointments</a></li>
    <li class="active">View Details</li>
@endsection()
@section('content-right')
    <div class="text-left text-md-right">
        <button data-toggle="collapse" data-target="#edit" class="btn btn-brand-primary">
            Edit Availability
            <i class="pl-3 fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <div id="edit" class="collapse">
            <div class="card bd-0">
                <form class="validateForm" action="{{ route('edit.availability') }}" method="post">
                    @csrf
                    <div class="form_available">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <div class="form-group">
                            <label class="card-form__label text-left">From: </label>
                            <input class="card-form__input form-control calendar"
                                   type="text" placeholder="Start Date" name="start_date">
                        </div>
                    </div>
                    <div class="form_available">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <div class="form-group">
                            <label class="card-form__label text-left">To: </label>
                            <input class="card-form__input form-control calendar"
                                   type="text" placeholder="End Date" name="end_date">
                        </div>
                    </div>
                    <button class="btn btn-brand-primary" type="submit">Save</button>
                </form>
            </div>
        </div>
    </div>
@endsection()
@section('content-body')
    <div>
        <div class="alert alert-brand-primary fade show" role="alert">
            Here is the link: <strong>{{ getenv('BASE_URL') }}{{ $user->username }}</strong>
        </div>
        <div class="row">
            <div class="col-lg-10">
                <div class="card bd-0">
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
    </div>
@endsection
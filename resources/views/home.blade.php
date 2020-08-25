@extends('layouts.main')
@section('title', 'Dashboard')
@section('header-breadcrumb')
    <li>Dashboard</li>
    <li class="active">My Appointments</li>
@endsection()
@section('sidebar')
    @include('elements/sidebar')
@endsection
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
        @if($user->is_profile_complete)
            <div class="alert alert-brand-primary fade show" role="alert">
                Here is the link: <strong class="overflow-wrap">{{ env('BASE_URL') }}{{ $user->username }}</strong>
            </div>
            <div class="row">
                <div class="col-lg-10">
                    <div class="card bd-0">
                        <div class="card__title fs-20 pb-1">
                            <i class="fa fa-calendar-check-o pr-2 card__icon green" aria-hidden="true"></i>
                            <span>Scheduled Appointment</span>
                        </div>

                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#upcoming">
                                    Upcoming Appointments
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#unapproved">
                                    Unapproved Appointments
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#past">
                                    Past Appointments
                                </a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="upcoming">
                                <div>
                                    @include('partials.schedule-apt', [
                                        'apts' => $upcoming,
                                        'aptStatus' => 'upcoming',
                                        'icon' => 'fa-calendar-plus-o',
                                        'description' => 'No Meeting has been scheduled yet.'
                                    ])
                                </div>
                            </div>
                            <div class="tab-pane fade" id="unapproved">
                                <div>
                                    @include('partials.schedule-apt', [
                                        'apts' => $unapproved,
                                        'aptStatus' => 'unapproved',
                                        'icon' => 'fa-calendar-times-o',
                                        'description' => 'No Meeting has been unapproved yet.'
                                    ])
                                </div>
                            </div>
                            <div class="tab-pane fade" id="past">
                                <div>
                                    @include('partials.schedule-apt', [
                                        'apts' => $past,
                                        'aptStatus' => 'past',
                                        'icon' => 'fa-calendar-minus-o',
                                        'description' => 'You have no past appointments'
                                    ])
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @else
            @include('partials.limited-access')
        @endif()
    </div>
    @include('modals.confirm-modal')
    @include('modals.cancel-modal')
    @include('modals.reschedule-modal')
@endsection

@extends('layouts.main')
@section('title', 'Dashboard')
@section('header-breadcrumb')
    <li>Dashboard</li>
    <li class="active">My Appointments</li>
@endsection()
@section('content-right')
    <div class="form_wrapper">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <div class="form-group">
            <input class="card-form__input form-control date_available"
                   type="text" placeholder="Edit Availability" name="date_available">
        </div>
    </div>
@endsection()
@section('content-body')
    <div>
        @if($user->is_profile_complete)
            <div class="alert alert-brand-primary fade show" role="alert">
                Here is the link: <strong>{{ getenv('BASE_URL') }}{{ $user->username }}</strong>
            </div>
            <div class="row">
                <div class="col-md-10">
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
                                        'icon' => 'fa-calendar-plus-o',
                                        'description' => 'No Meeting has been scheduled yet.'
                                    ])
                                </div>
                            </div>
                            <div class="tab-pane fade" id="unapproved">
                                <div>
                                    @include('partials.schedule-apt', [
                                        'apts' => $unapproved,
                                        'icon' => 'fa-calendar-times-o',
                                        'description' => 'No Meeting has been unapproved yet.'
                                    ])
                                </div>
                            </div>
                            <div class="tab-pane fade" id="past">
                                <div>
                                    @include('partials.schedule-apt', [
                                        'apts' => $past,
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
@endsection

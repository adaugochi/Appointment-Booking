@extends('layouts.rep')
@section('title', 'Dashboard')
@section('content')
    <section class="py-4">
        <div class="clearfix">
            <div class="row">
                <div class="col-md-4">
                    <p class="fs-22">My Appointments</p>
                </div>
                <div class="col-md-8">
                   @include('partials.edit-availability')
                </div>
            </div>
        </div>
    </section>
    <section class="pb-5 pb-md-0">
        <div>
            @if($user->is_profile_complete)
                <div class="row pb-md-5">
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
                                <i class="fa fa-calendar-check-o pr-2 card__icon green" aria-hidden="true"></i>
                                <span>Scheduled Appointment</span>
                            </div>
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#upcoming">Upcoming Appointments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#unapproved">Unapproved Appointments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#past">Past Appointments</a>
                                </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content pt-4">
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
    </section>
@include('modals.confirm-modal')
@include('modals.view-apt-details')
@include('modals.cancel-modal')
@endsection()

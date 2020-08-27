@extends('layouts.app')
@section('content')
    <main class="container">
        <div class="row ht-100v align-items-center justify-content-center">
            <div class="col-md-10 mx-auto">
                <input type="hidden" value="{{ $user['end_date'] }}" id="endDate">
                <input type="hidden" value="{{ $user['start_date'] }}" id="startDate">
                <p class="fs-header text-center">
                        @if($duration == '30min')
                            <input type="hidden" value="{!! 30 !!}" class="duration">
                            {!! 30 !!}
                        @elseif ($duration == '60min')
                            <input type="hidden" value="{!! 60 !!}" class="duration">
                            {!! 60 !!}
                        @else
                            <input type="hidden" value="{!! 15 !!}" class="duration">
                            {!! 15 !!}
                        @endif
                        Minute Meeting
                    </p>
                <p class="text-center">
                    Kindly select the date most convenient for you.
                    Do ensure the date you select does not fall on a weekend.
                </p>

                <div>
                    <div class="bg-white" id="pick_date">
                        <div class="booking__align-header px-3 d-flex align-items-fe">
                            <a href="/{{ $username }}">
                                <div class="card-dashboard-icon gray">
                                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                                </div>
                            </a>
                            <h3 class="mx-auto">Select A Date</h3>
                        </div>
                        <div class="px-3 py-5">
                            <div class="row">
                                <div class="mx-auto col-md-8 form_wrapper">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <div class="form-group">
                                        <input class="card-form__input form-control calendar"
                                               type="text" placeholder="pick a date" name="calendar">
                                    </div>
                                    <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="selectDate" disabled>
                                        <span>Show Available Time</span>
                                        <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white d-none" id="pick_time">
                        <div class="booking__align-header px-3 d-flex align-items-fe">
                            <div class="card-dashboard-icon gray cursor-pointer" id="back_first">
                                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                            </div>
                            <h3 class="mx-auto">Select A Time</h3>
                        </div>
                        <div class="px-3 py-5">
                            <div class="row">
                                <div class="mx-auto col-md-8 form_wrapper">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    <div class="form-group">
                                        <input class="card-form__input form-control time"
                                               type="text" placeholder="pick a time" name="time">
                                    </div>
                                    <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="selectTime" disabled>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white d-none" id="enter_details">
                        <div class="booking__align-header px-3 d-flex align-items-fe">
                            <div class="card-dashboard-icon gray cursor-pointer" id="back_second">
                                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                            </div>
                            <h3 class="mx-auto">Enter Your Details</h3>
                        </div>
                        <div class="px-3 py-5">
                            <div class="row">
                                <div class="mx-auto col-lg-6 col-md-10">
                                    <form class="validateForm" method="post" action="{{ route('create-schedule') }}">
                                        @csrf
                                        <input type="hidden" name="username" value="{{ $username }}">
                                        <input type="hidden" name="duration" value="{{ $duration }}">
                                        <input type="hidden" name="schedule_date" id="scheduleDate">
                                        <input type="hidden" name="schedule_time" id="scheduleTime">
                                        <div class="form-group text-left">
                                            <label class="card-form__label">
                                                Name <span class="text-danger">*</span>
                                            </label>
                                            <input class="card-form__input form-control" type="text"
                                                   name="visitors_name">
                                        </div>
                                        <div class="form-group text-left">
                                            <label class="card-form__label">
                                                Phone Number <span class="text-danger">*</span>
                                            </label>
                                            <input class="card-form__input form-control" type="text"
                                                   name="visitors_phone_number">
                                        </div>
                                        <div class="form-group text-left">
                                            <label class="card-form__label">
                                                Reason For Visit <span class="text-danger">*</span>
                                            </label>
                                            <textarea class="card-form__input form-control"
                                                      name="reason_for_visit" rows="3"></textarea>
                                        </div>

                                        <input type="submit" value="Schedule An Appointment"
                                               class="btn btn-brand-outline-pry btn-wd-100">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection()

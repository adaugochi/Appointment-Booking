<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>No Name</title>
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <main class="container p-5">
        <div class="text-center">
            <p class="fs-header">
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
            <p>
                Kindly select the date most convenient for you.
                Do ensure the date you select does not fall on a weekend.
            </p>
        </div>
    </main>
    <div class="d-md-flex align-items-center justify-content-center m-1">
        <div class="wd wd-md-700 bg-white mb-5 d-none" id="pick_date">
            <div class="booking__align-header">
                <h3>Select A Date</h3>
            </div>
            <div class="px-1 pb-5">
                <div class="row">
                    <div class="mx-auto col-md-8">
                        <div class="calendar"></div>
                        <button type="button" class="btn btn-schedule btn-wd-100" id="selectDate" disabled>
                            Show Available Time
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="wd wd-md-700 bg-white mb-5 d-none" id="pick_time">
            <div class="booking__align-header d-flex align-items-fe">
                <div class="card-dashboard-icon gray cursor-pointer" id="back_first">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </div>
                <h3 class="mx-auto">Select A Time</h3>
            </div>
            <div class="px-3 py-5">
                <div class="row">
                    <div class="mx-auto col-md-6">
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <input class="card-form__input form-control time"
                                       type="text" placeholder="pick a time">
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-schedule btn-wd-100" id="selectTime" disabled>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="wd wd-md-700 bg-white mb-5 " id="enter_details">
            <div class="booking__align-header d-flex align-items-fe">
                <div class="card-dashboard-icon gray cursor-pointer" id="back_second">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </div>
                <h3 class="mx-auto">Enter Your Details</h3>
            </div>
            <div class="px-3 py-5">
                <div class="row">
                    <div class="mx-auto col-md-6">
                        <form id="bookDate" class="">
                            <input type="hidden" name="schedule_date" id="scheduleDate">
                            <input type="hidden" name="schedule_time" id="scheduleTime">
                            <div class="form-group text-left">
                                <label class="card-form__label">
                                    Name <span class="text-danger">*</span>
                                </label>
                                <input class="card-form__input form-control" type="text" name="visitors_name">
                            </div>
                            <div class="form-group text-left">
                                <label class="card-form__label">
                                    Email
                                </label>
                                <input class="card-form__input form-control" type="text" name="visitors_email">
                            </div>
                            <div class="form-group text-left">
                                <label class="card-form__label">
                                    Phone Number <span class="text-danger">*</span>
                                </label>
                                <input class="card-form__input form-control" type="text" name="visitors_phone_number">
                            </div>
                            <div class="form-group text-left">
                                <label class="card-form__label">
                                    Reason For Visit <span class="text-danger">*</span>
                                </label>
                                <textarea class="card-form__input form-control" name="reason_for_visit" rows="3"></textarea>
                            </div>

                            <input type="submit" value="Schedule An Appointment"
                                   class="btn btn-schedule btn-wd-100">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
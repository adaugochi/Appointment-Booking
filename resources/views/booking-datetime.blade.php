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
            <p class="fs-header">30 Minute Meeting</p>
            <p>
                Kindly select the date most convenient for you.
                Do ensure the date you select does not fall on a weekend.
            </p>
        </div>
    </main>
        <div class="d-md-flex align-items-center justify-content-center m-1">
            <div class="wd wd-md-700 bg-white mb-5">
                <div class="booking__align-header">
                    <h3>Select A Date</h3>
                </div>
                <div class="calendar"></div>
                <form id="bookDate">
                    <input type="hidden" name="schedule_date" id="scheduleDate">
                    <input type="submit" value="Show Available Time" class="btn btn-schedule">
                </form>
            </div>
        </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
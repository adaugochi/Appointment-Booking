<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>NAFRN</title>

    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet" type="text/css">
    <link href="/css/toastr.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="py-md-0 py-5">
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="/js/app.js"></script>
    @include('partials.flash-messages')
</body>
</html>

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | NAFRN</title>
    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet" type="text/css">
    <link href="/css/toastr.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div>
        <div class="container">
            <div class="row vht-100 align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 offset-lg-2 mx-auto">
                    <div class="card mx-auto bd-0">
                        <h1 class="mb-3 card-box-title">@yield('card-title')</h1>
                        <div>
                            <form class="card-form__wrapper validateForm" action="@yield('route')" method="post">
                                @csrf
                                @yield('content')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="/js/app.js"></script>
    @include('partials.flash-messages')
</body>
</html>

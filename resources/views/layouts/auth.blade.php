<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | NAFRN</title>
    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
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
                        <div class="d-flex mb-4">
                            <a href="@yield('back-route')">
                                <div class="card-dashboard-icon gray">
                                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                                </div>
                            </a>
                            <h1 class="card-box-title mx-auto fs-28 align-self-end">@yield('card-title')</h1>
                        </div>
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

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
</head>
<body>
<div>
    <div class="container">
        <div class="row vht-100 align-items-center justify-content-center">
            <div class="col-md-8 col-lg-6 offset-lg-2 mx-auto">
                <div class="card mx-auto bd-0">
                    <div class="text-center">
                        <img src="@yield('imageURL')" class="w-75 card-image-width mx-auto d-block"/>
                        <h3 class="font-weight-bold my-4">@yield('error-title')</h3>
                        <div>
                            @yield('content')
                        </div>
                        <a href="/" class="btn btn-brand-primary">
                            <i class="fa fa-long-arrow-left fs-18 pl-md-2 va-bottom" aria-hidden="true"></i>
                            <span class="">Go Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<script src="/js/app.js"></script>
</body>
</html>

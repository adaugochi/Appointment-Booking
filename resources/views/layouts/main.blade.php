<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | NAFRN</title>
    <!-- Icon-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Styles -->
    <link href="{{ asset('css/portal.css') }}" rel="stylesheet">
    <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
    @yield('style')
</head>
<body>
    <div class="wrapper">
        @if(\Auth::guard('admin')->check())
            @include('elements.admin-sidebar')
        @else
            @include('elements.sidebar')
        @endif()
        <div class="content-wrapper ">
            @include('elements.header')
            <section class="content">
                <section class="content-header">
                    <div class="clearfix">
                        <div class="row">
                            <div class="col-md-7">
                                <h1 class="content-header__title">
                                    @yield('title') @yield('content-header-right')
                                </h1>
                                <ol class="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    @yield('header-breadcrumb')
                                </ol>
                            </div>
                            <div class="col-md-5">
                                @yield('content-right')
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content-body">
                    @yield('content-body')
                </section>
                @include('elements.footer')
            </section>
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/portal.js') }}"></script>
    @include('partials.flash-messages')
</body>
</html>

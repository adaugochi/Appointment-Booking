@extends('layouts.main')
@section('title', 'Dashboard')
@section('header-breadcrumb')
    <li class="active">Dashboard</li>
@endsection()
@section('content-body')
    <div>
        <div class="alert alert-success fade show" role="alert">
            Here is the link: <strong>{{ getenv('BASE_URL') }}{{ $user->username }}</strong>
        </div>
    </div>

@endsection

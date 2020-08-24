@extends('layouts.auth')
@section('card-title', 'Sign Up')
@section('route', $regRoute)
@section('title', 'Register')
@section('content')
    {{--<div class="form-group">--}}
        {{--<label class="card-form__label">Username</label>--}}
        {{--<input type="text" name="username" value="{{ old('username') }}"--}}
               {{--class="card-form__input form-control @error('username') is-invalid @enderror">--}}
        {{--@include('partials.error', ['fieldName' => 'username'])--}}
    {{--</div>--}}
    <input type="hidden" value="{{ $token }}" name="token">
    <div class="form-group">
        <label class="card-form__label">Password</label>
        <input type="password" class="card-form__input form-control @error('password') is-invalid @enderror"
               name="password" id="password" value="{{ old('password') }}">
        @include('partials.error', ['fieldName' => 'password'])
    </div>
    <div class="form-group">
        <label class="card-form__label">Re-enter Password</label>
        <input type="password" class="card-form__input form-control @error('password') is-invalid @enderror"
               name="password_confirmation">
    </div>
    <div class="fs-12 form-group">
        By clicking the “Sign Up” button, you agree to Our
        <a href="#" class="text-brand-primary text-underline">Terms & Conditions</a>
    </div>
    <button type="submit" class="btn btn-brand-primary btn-block">Sign Up</button>
@endsection()

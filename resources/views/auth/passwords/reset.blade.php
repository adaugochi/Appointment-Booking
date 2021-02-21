@extends('layouts.auth')
@section('card-title', 'Reset Password')
@section('route', $pwdResetRoute)
@section('back-route', $forgetPwdRoute)
@section('title', 'Reset Password')
@section('content')
    <input type="hidden" name="token" value="{{ $token }}">
    <div class="form-group">
        <label class="card-form__label">Phone Number</label>
        <input type="text" name="phone_number" value="{{ $phoneNumber }}"
               class="card-form__input form-control" readonly>
    </div>
    <div class="form_available toggle-eyes">
        <i class="fa fa-eye-slash cursor-pointer" aria-hidden="true"></i>
        <div class="form-group">
            <label class="card-form__label">Password</label>
            <input type="password" class="card-form__input form-control @error('password') is-invalid @enderror"
                   name="password" id="password" value="{{ old('password') }}">
            @include('partials.error', ['fieldName' => 'password'])
        </div>
    </div>
    <div class="form_available toggle-eyes">
        <i class="fa fa-eye-slash cursor-pointer" aria-hidden="true"></i>
        <div class="form-group">
            <label class="card-form__label">Re-enter Password</label>
            <input type="password" class="card-form__input form-control @error('password') is-invalid @enderror"
                   name="password_confirmation">
        </div>
    </div>
    <button type="submit" class="btn btn-brand-primary btn-block py-12">
        Reset Password
    </button>
@endsection

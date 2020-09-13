@extends('layouts.auth')
@section('card-title', 'Sign In')
@section('route', $loginRoute)
@section('title', 'Login')
@section('content')
    @if($isAdmin)
        <div class="form-group">
            <label class="card-form__label">Email</label>
            <input type="text" name="email" value="{{ old('email') }}"
                   class="card-form__input form-control @error('email') is-invalid @enderror">
            @include('partials.error', ['fieldName' => 'email'])
        </div>
    @else
        <div class="form-group">
            <label class="card-form__label">Username</label>
            <input type="text" name="username" value="{{ old('username') }}"
                   class="card-form__input form-control @error('username') is-invalid @enderror">
            @include('partials.error', ['fieldName' => 'username'])
        </div>
    @endif
    <div class="form_available toggle-eyes">
        <i class="fa fa-eye-slash cursor-pointer" aria-hidden="true"></i>
        <div class="form-group">
            <label class="card-form__label">Password</label>
            <input type="password" name="password" class="card-form__input form-control">
        </div>
    </div>
    <div class="form-group text__underline">
        <a href="{{ $forgotPwdRoute }}" class="text-brand-primary text-underline">Forgot Password?</a>
    </div>
    <button type="submit" class="btn btn-brand-primary btn-block">Sign In</button>
@endsection()

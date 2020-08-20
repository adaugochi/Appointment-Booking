@extends('layouts.auth')
@section('card-title', 'Sign In')
@section('route', route('login'))
@section('title', 'Login')
@section('content')
    <div class="form-group">
        <label class="card-form__label">Username</label>
        <input type="text" name="username" value="{{ old('username') }}"
               class="card-form__input form-control @error('username') is-invalid @enderror">
        @include('partials.error', ['fieldName' => 'username'])
    </div>
    <div class="form-group">
        <label class="card-form__label">Password</label>
        <input type="password" name="password" class="card-form__input form-control">
    </div>
    <div class="form-group text__underline">
        <a href="/password-reset" class="text-brand-primary text-underline">Forgot Password?</a>
    </div>
    <button type="submit" class="btn btn-brand-primary btn-block">Sign In</button>
@endsection()

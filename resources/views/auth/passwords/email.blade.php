@extends('layouts.auth')
@section('card-title', 'Forget Password')
@section('route', route('password.email'))
@section('title', 'Forget Password')
@section('content')
    <div class="form-group">
        <label class="card-form__label">Email</label>
        <input type="text" name="email" value="{{ old('email') }}"
               class="card-form__input form-control @error('email') is-invalid @enderror">
        @include('partials.error', ['fieldName' => 'email'])
    </div>
    <button type="submit" class="btn btn-brand-primary btn-block">Submit</button>
@endsection

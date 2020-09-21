@extends('layouts.auth')
@section('card-title', 'Forget Password')
@section('route', $pwdResetRoute)
@section('back-route', $loginRoute)
@section('title', 'Forget Password')
@section('content')
    <div class="form-group">
        @if($isAdmin)
            <label class="card-form__label">Email</label>
            <input type="text" name="email" value="{{ old('email') }}"
                   class="card-form__input form-control @error('email') is-invalid @enderror">
            @include('partials.error', ['fieldName' => 'email'])
        @else
            <label class="card-form__label">Phone Number</label>
            <input type="text" name="phone_number" value="{{ old('phone_number') }}"
                   class="card-form__input form-control @error('phone_number') is-invalid @enderror">
            @include('partials.error', ['fieldName' => 'phone_number'])
        @endif
    </div>
    <button type="submit" class="btn btn-brand-primary btn-block">Submit</button>
@endsection

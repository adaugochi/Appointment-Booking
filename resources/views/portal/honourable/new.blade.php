@extends('layouts.main')
@section('title', 'Honourable')
@section('header-breadcrumb')
    <li class="active"><a href="{{ route('admin.honourable') }}">Honourable</a></li>
    <li class="active">{{ $isEdit ? 'Edit' : 'New' }}</li>
@endsection()
@section('sidebar')
    @include('elements/admin-sidebar')
@endsection
@section('content-body')
    <div class="row">
        <div class="col-md-8 col-lg-6">
            <div class="card bd-0">
                <form class="validateForm" method="post" action="{{$isEdit ?  route('update.honourable') : route('save.honourable')}}">
                    @csrf
                    @if($isEdit)
                        <input type="hidden" name="id" value="{{ $user->id }}">
                    @endif
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            First Name <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="first_name"
                               value="{{ $isEdit ? $user->first_name : '' }}">
                    </div>
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            Last Name <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="last_name"
                               value="{{ $isEdit ? $user->last_name : '' }}">
                    </div>
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            Phone Number <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="phone_number"
                               value="{{ $isEdit ? $user->phone_number : '' }}">
                    </div>
                    <input type="submit" value="Submit" class="btn btn-brand-outline-pry btn-wd-100">
                </form>
            </div>
        </div>
    </div>
@endsection()

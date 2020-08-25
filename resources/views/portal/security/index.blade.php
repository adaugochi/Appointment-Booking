@extends('layouts.main')
@section('title', 'Security')
@section('header-breadcrumb')
    <li class="active">Security</li>
@endsection()
@section('sidebar')
    @include('elements/admin-sidebar')
@endsection
@section('content-header-right')
    <a href="{{ route('new.security') }}" class="btn btn-lg btn-brand-primary">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Add Security
    </a>
@endsection()
@section('content-body')
    <div class="card bd-0 card-table">
        @if(sizeof($securities) > 0)
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th class="field-name"><span>S/N</span></th>
                        <th class="field-name"><span>Name</span></th>
                        <th class="field-name"><span>Phone Number</span></th>
                        <th class="field-name"><span>Status</span></th>
                        <th class="field-name"><span>Created At</span></th>
                        <th class="field-name"><span>Action</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($securities as $key => $security)
                        <tr>
                            <td>{{ $key+1 }}</td>
                            <td>{{ $security->getFullName() }}</td>
                            <td>{{ $security->phone_number }}</td>
                            <td>
                                @if($security->has_registered)
                                    <span class="font-weight-bold status status-active }}">
                                        ACTIVE
                                    </span>
                                @else
                                    <span class="font-weight-bold status status-pending }}">
                                        PENDING
                                    </span>
                                @endif
                            </td>
                            <td>{{ $security->formatDate() }}</td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn btn-action btn-secondary dropdown-toggle"
                                            data-toggle="dropdown">
                                        Actions
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="">
                                            Edit
                                        </a>
                                        <a class="dropdown-item" href="">
                                            View
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <div class="empty-state">
                <i class="fa fa-user-secret empty-state__icon icon-grey" aria-hidden="true"></i>
                <p class="empty-state__description mt-2">No Security has been added yet.</p>
            </div>
        @endif
        {{ $securities->render() }}
    </div>
@endsection()

@extends('layouts.main')
@section('title', 'Honourable')
@section('header-breadcrumb')
    <li class="active">Honourable</li>
@endsection()
@section('sidebar')
    @include('elements/admin-sidebar')
@endsection
@section('content-header-right')
    <a href="{{ route('new.honourable') }}" class="btn btn-lg btn-brand-primary">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Add Honourable
    </a>
@endsection()
@section('content-body')
    <div class="card bd-0 card-table">
        @if(sizeof($users) > 0)
            <div class="table-responsive">
                <table class="table table-striped" id="admin_td">
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
                    @foreach($users as $key => $user)
                        <tr>
                            <td>{{ $key+1 }}</td>
                            <td>{{ $user->getFullName() }}</td>
                            <td>{{ $user->phone_number }}</td>
                            <td>
                                @if($user->is_active && $user->has_registered)
                                    <span class="font-weight-bold status status-active }}">
                                        ACTIVE
                                    </span>
                                @elseif(!$user->is_active)
                                    <span class="font-weight-bold status status-deactivate }}">
                                        DEACTIVATE
                                    </span>
                                @else
                                    <span class="font-weight-bold status status-pending }}">
                                        PENDING
                                    </span>
                                @endif
                            </td>
                            <td>{{ $user->formatDate() }}</td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn btn-action btn-secondary dropdown-toggle"
                                            data-toggle="dropdown">
                                        Actions
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('admin.hon.edit', $user->id) }}">
                                            Edit
                                        </a>
                                        <span class="dropdown-item"  data-toggle="modal"
                                              data-target="resendInviteUser" data-id="{{$user->id}}">
                                            Resend Invite
                                        </span>
                                        <a class="dropdown-item" href="{{ route('admin.hon.view', $user->id) }}">
                                            View
                                        </a>
                                        <span class="dropdown-item"  data-toggle="modal"
                                           data-target="deactivateUser" data-id="{{$user->id}}">
                                            Deactivate
                                        </span>
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
                <i class="fa fa-briefcase empty-state__icon icon-grey" aria-hidden="true"></i>
                <p class="empty-state__description mt-2">No Honourable has been added yet.</p>
            </div>
        @endif
        {{ $users->render() }}
    </div>
    @include('modals.deactivate-modal')
    @include('modals.resend-invite-modal')
@endsection()

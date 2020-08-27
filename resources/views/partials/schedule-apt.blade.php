@if(sizeof($apts) > 0)
    <div class="table-responsive">
        <table class="table table-striped list-item-container">
            <thead>
            <tr>
                <th class="field-name"><span>S/N</span></th>
                <th class="field-name"><span>Date</span></th>
                <th class="field-name"><span>Time</span></th>
                <th class="field-name"><span>Name</span></th>
                <th class="field-name"><span>Action</span></th>
            </tr>
            </thead>
            <tbody id="tbody">
            @foreach($apts as $key => $apt)
                <tr>
                    <td>{{ $key+1 }}</td>
                    <td>{{ \App\helpers\Utils::formatDate($apt->schedule_date) }}</td>
                    <td>
                        {{ \App\helpers\Utils::convertToMinutesIntervals($apt->schedule_time, $apt->duration) }}
                    </td>
                    <td>{{ $apt->visitors_name }}</td>
                    <td>
                        <div class="dropdown">
                            <button type="button" class="btn btn-secondary btn-action dropdown-toggle"
                                    data-toggle="dropdown">
                                Actions
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="{{ route('schedule.view', $apt->id) }}">
                                    View Details
                                </a>
                                @if($aptStatus === 'unapproved')
                                    <span class="dropdown-item cursor-pointer" data-toggle="modal"
                                          data-target="confirmApt" data-id="{{$apt->id}}" data-msg="confirm">
                                    Confirm Appointment
                                </span>
                                    <span class="dropdown-item cursor-pointer" data-toggle="modal"
                                          data-target="rescheduleApt" data-id="{{$apt->id}}"
                                          data-date="{{$apt->schedule_date}}" data-time="{{$apt->schedule_time}}">
                                        Reschedule Appointment
                                    </span>
                                @endif
                                @if($aptStatus === 'unapproved' || $aptStatus === 'upcoming')
                                    <span class="dropdown-item cursor-pointer" data-toggle="modal"
                                          data-target="cancelApt" data-id="{{$apt->id}}" data-msg="cancel">
                                        Cancel Appointment
                                    </span>
                                @endif
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
        <i class="fa {{ $icon }} empty-state__icon icon-grey" aria-hidden="true"></i>
        <p class="empty-state__description mt-2">
            {!! $description !!}
        </p>
    </div>
@endif

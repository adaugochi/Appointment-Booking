@if(sizeof($apts) > 0)
    <div class="">
        <table class="table list-item-container">
            <thead>
            <tr>
                <th class="field-name"><span>S/N</span></th>
                <th class="field-name"><span>Date & Time</span></th>
                <th class="field-name"><span>Action</span></th>
            </tr>
            </thead>
            <tbody id="tbody">
            @foreach($apts as $key => $apt)
                <tr>
                    <td>{{ $key+1 }}</td>
                    <td>
                        <div>{{ \App\helpers\Utils::formatDate($apt->schedule_date) }}</div>
                        <span>{{ \App\helpers\Utils::convertToMinutesIntervals($apt->schedule_time, $apt->duration) }}</span>
                    </td>
                    <td>
                        <button type="button" class="btn btn-secondary btn-pd"
                                data-toggle="collapse" data-target="#demo{{$apt->id}}">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                            <span class="d-none d-md-inline">Show Details</span>
                        </button>
                    </td>
                    <tr>
                        <td colspan="3" class="p-0">
                            <div id="demo{{$apt->id}}" class="collapse py-3 px-2">
                                <p>Meeting schedule with {{ $apt->visitors_name }}</p>
                                <div class="d-flex">
                                    <div class="pr-2">
                                        <a class="btn btn-outline-info btn-pd btn-unset-rd"
                                           href="{{ route('schedule.view', $apt->id) }}">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                            <span class="d-none d-md-inline">View</span>
                                        </a>
                                    </div>
                                    @if($aptStatus === 'unapproved')
                                        <div class="pr-2">
                                            <button type="button" class="btn-outline-success btn btn-pd btn-unset-rd" data-toggle="modal"
                                                    data-target="confirmApt" data-id="{{$apt->id}}" data-msg="confirm">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                                <span class="d-none d-md-inline">Confirm</span>
                                            </button>
                                        </div>
                                        <div class="pr-2">
                                            <button type="button" class="btn-outline-warning btn btn-pd btn-unset-rd" data-toggle="modal"
                                                    data-target="rescheduleApt" data-id="{{$apt->id}}"
                                                    data-date="{{$apt->schedule_date}}" data-time="{{$apt->schedule_time}}">
                                                <i class="fa fa-repeat" aria-hidden="true"></i>
                                                <span class="d-none d-md-inline">Reschedule</span>
                                            </button>
                                        </div>
                                    @endif
                                    @if($aptStatus === 'unapproved' || $aptStatus === 'upcoming')
                                        <div class="pr-2">
                                            <button type="button" class="btn-outline-danger btn btn-pd btn-unset-rd" data-toggle="modal"
                                                    data-target="cancelApt" data-id="{{$apt->id}}" data-msg="cancel">
                                                <i class="fa fa-ban" aria-hidden="true"></i>
                                                <span class="d-none d-md-inline">Cancel</span>
                                            </button>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </td>
                    </tr>
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

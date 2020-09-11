@if(sizeof($apts) > 0)
    <div class="">
        <table class="table list-item-container"  id="accordion">
            <thead>
            <tr>
                <th class="field-name d-none d-md-block"><span>S/N</span></th>
                <th class="field-name"><span>Date & Time</span></th>
                <th class="field-name"><span>Action</span></th>
            </tr>
            </thead>
            <tbody id="tbody">
            @foreach($apts as $key => $apt)
                <tr>
                    <td class="d-none d-md-block">
                        <div class="font-weight-bold">{{ $key+1 }}</div>
                    </td>
                    <td class="d-md-flex">
                        <div class="pr-md-3">{{ \App\helpers\Utils::formatDate($apt->schedule_date) }}</div>
                        <span>{{ \App\helpers\Utils::convertToMinutesIntervals($apt->schedule_time, $apt->duration) }}</span>
                    </td>
                    <td>
                        <button type="button" class="btn btn-light text-gray btn-pd btn-show"
                                data-toggle="collapse" data-target="#demo{{$apt->id}}">
                            <span class="d-none d-md-inline">Show Details</span>
                            <i class="fa fa-caret-right fs-18 pl-md-2 va-bottom" aria-hidden="true"></i>
                        </button>
                    </td>
                    <tr>
                        <td colspan="3" class="p-0">
                            <div id="demo{{$apt->id}}" class="collapse py-3 px-2" data-parent="#accordion">
                                <div class="flex-wrap d-flex justify-content-around">
                                    <p>Meeting scheduled with <strong>{{ $apt->visitors_name }}</strong></p>
                                    <div class="d-flex">
                                        <div class="pr-2">
                                            <button type="button" class="btn btn-brand-outline-pry btn-pd btn-outline-action"
                                                    data-toggle="modal" data-target="viewApt" data-id="{{$apt->id}}"
                                                    data-name="{{$apt->visitors_name}}" data-pnum="{{$apt->visitors_phone_number}}"
                                                    data-date="{{\App\helpers\Utils::formatDate($apt->schedule_date)}}"
                                                    data-time="{{\App\helpers\Utils::formatTime($apt->schedule_time)}}"
                                                    data-reason="{{$apt->reason_for_visit}}">
                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                <span class="d-none d-md-inline">View</span>
                                            </button>
                                        </div>
                                        @if($aptStatus === 'unapproved')
                                            <div class="pr-2">
                                                <button type="button" class="btn btn-brand-outline-pry btn-pd btn-outline-action"
                                                        data-toggle="modal" data-target="confirmApt" data-id="{{$apt->id}}">
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                    <span class="d-none d-md-inline">Confirm</span>
                                                </button>
                                            </div>
                                        @endif
                                        @if($aptStatus === 'unapproved' || $aptStatus === 'past')
                                            <div class="pr-2">
                                                <a href="{{ route('schedule.show.reschedule', [$apt->id, $apt->schedule_date, $apt->duration]) }}"
                                                   class="btn btn-brand-outline-pry btn-pd btn-outline-action">
                                                    <i class="fa fa-repeat" aria-hidden="true"></i>
                                                    <span class="d-none d-md-inline">Reschedule</span>
                                                </a>
                                            </div>
                                        @endif
                                        @if($aptStatus === 'unapproved' || $aptStatus === 'upcoming')
                                            <div class="pr-2">
                                                <button type="button" class="btn btn-brand-outline-pry btn-pd btn-outline-action"
                                                        data-toggle="modal" data-target="cancelApt" data-id="{{$apt->id}}">
                                                    <i class="fa fa-ban" aria-hidden="true"></i>
                                                    <span class="d-none d-md-inline">Cancel</span>
                                                </button>
                                            </div>
                                        @endif
                                    </div>
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

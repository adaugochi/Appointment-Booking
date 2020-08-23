<!-- The Modal -->
<div class="modal fade" id="rescheduleAptModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Reschedule Appointment</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form action="{{ route('schedule.reschedule') }}" method="post">
                    @csrf
                    <div class="form-group">
                        <input type="hidden" class="id" name="id">
                    </div>
                    <div class="form_wrapper">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <div class="form-group">
                            <input class="card-form__input form-control calendar" id="date"
                                   type="text" placeholder="pick a date" name="schedule_date">
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <div class="form-group">
                            <input class="card-form__input form-control timing" id="time"
                                   type="text" placeholder="pick a time" name="schedule_time">
                        </div>
                    </div>

                    <input type="submit" class="btn btn-brand-primary" value="Save">
                    <button type="button" class="btn btn-light text-gray" data-dismiss="modal">Close</button>
                </form>
            </div>
        </div>
    </div>
</div>
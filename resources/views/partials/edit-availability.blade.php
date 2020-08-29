<div class="text-left text-md-right">
    <button data-toggle="collapse" data-target="#edit" class="btn btn-brand-primary">
        Edit Availability
        <i class="pl-3 fa fa-arrow-down" aria-hidden="true"></i>
    </button>
    <div id="edit" class="collapse">
        <div class="card bd-0">
            <form class="validateForm" action="{{ route('edit.availability') }}" method="post">
                @csrf
                <div class="form_available">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <div class="form-group">
                        <label class="card-form__label text-left">From: </label>
                        <input class="card-form__input form-control edit-calendar"
                               type="text" placeholder="Start Date" name="start_date">
                    </div>
                </div>
                <div class="form_available">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <div class="form-group">
                        <label class="card-form__label text-left">To: </label>
                        <input class="card-form__input form-control edit-calendar"
                               type="text" placeholder="End Date" name="end_date">
                    </div>
                </div>
                <button class="btn btn-brand-primary" type="submit">Save</button>
            </form>
        </div>
    </div>
</div>

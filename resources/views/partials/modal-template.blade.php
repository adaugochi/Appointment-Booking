<!-- The Modal -->
<div class="modal fade" id="{{ $modalId }}">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">{{ $modalTitle }}</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form action="{{ $modalAction }}" method="post">
                    @csrf
                    <div class="form-group">
                        <input type="hidden" class="id" name="id">
                        <p>Are you sure to want to <strong>{{ $modalMsg }}</strong> this appointment?</p>
                    </div>

                    <input type="submit" class="btn btn-brand-primary" value="Yes">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
                </form>
            </div>
        </div>
    </div>
</div>
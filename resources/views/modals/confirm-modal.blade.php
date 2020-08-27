@include('partials.modal-template', [
    'modalId' => 'confirmAptModal',
    'modalTitle' => 'Confirm Appointment',
    'modalAction' => route('schedule.confirm'),
    'modalMsg' => 'confirm'
])
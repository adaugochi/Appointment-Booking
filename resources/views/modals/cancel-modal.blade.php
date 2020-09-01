@include('partials.modal-template', [
    'modalId' => 'cancelAptModal',
    'modalTitle' => 'Cancel Appointment',
    'modalAction' => route('schedule.cancel'),
    'modalMsg' => 'cancel',
    'modalMsg2' => 'appointment'
])

@include('partials.modal-template', [
    'modalId' => 'deactivateUserModal',
    'modalTitle' => 'Deactivate User Account',
    'modalAction' => route('deactivate.honourable'),
    'modalMsg' => 'deactivate',
    'modalMsg2' => 'user'
])

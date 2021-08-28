@include('partials.modal-template', [
    'modalId' => 'deactivateSecurityModal',
    'modalTitle' => 'Deactivate Security Account',
    'modalAction' => route('deactivate.security'),
    'modalMsg' => 'deactivate',
    'modalMsg2' => 'security'
])

@include('partials.modal-template', [
    'modalId' => 'resendInviteUserModal',
    'modalTitle' => 'Resend Invitation To User',
    'modalAction' => route('resend-invite.honourable'),
    'modalMsg' => 'resend invitation to',
    'modalMsg2' => 'user'
])

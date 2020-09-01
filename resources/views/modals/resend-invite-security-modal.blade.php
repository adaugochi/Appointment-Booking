@include('partials.modal-template', [
    'modalId' => 'resendInviteSecurityModal',
    'modalTitle' => 'Resend Invitation To Security',
    'modalAction' => route('resend-invite.security'),
    'modalMsg' => 'resend invitation to',
    'modalMsg2' => 'security'
])

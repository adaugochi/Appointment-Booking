(function ($) {
    let confirmApt = $("[data-target='confirmApt']"),
        confirmAptModal = $("#confirmAptModal"),
        cancelApt = $("[data-target='cancelApt']"),
        cancelAptModal = $("#cancelAptModal"),
        rescheduleApt = $("[data-target='rescheduleApt']"),
        rescheduleAptModal = $("#rescheduleAptModal"),
        deactivateUser = $("[data-target='deactivateUser']"),
        deactivateUserModal = $("#deactivateUserModal"),
        resendInviteUser = $("[data-target='resendInviteUser']"),
        resendInviteUserModal = $("#resendInviteUserModal"),
        deactivateSecurity = $("[data-target='deactivateSecurity']"),
        deactivateSecurityModal = $("#deactivateSecurityModal"),
        resendInviteSecurity = $("[data-target='resendInviteSecurity']"),
        resendInviteSecurityModal = $("#resendInviteSecurityModal"),
        id = $(".id"),
        scheduleDate = $("#date"),
        scheduleTime = $("#time");

    function popModal($select, $modal) {
        $select.on('click', function (e) {
            e.preventDefault();
            $modal.modal('show');
            id.val($(this).data('id'))
        });
    }

    popModal(confirmApt, confirmAptModal);
    popModal(deactivateUser, deactivateUserModal);
    popModal(resendInviteUser, resendInviteUserModal);
    popModal(deactivateSecurity, deactivateSecurityModal)
    popModal(resendInviteSecurity, resendInviteSecurityModal);
    popModal(cancelApt, cancelAptModal);

    rescheduleApt.on('click', function (e) {
        e.preventDefault();
        rescheduleAptModal.modal('show');
        id.val($(this).data('id'));
        scheduleDate.val($(this).data('date'));
        scheduleTime.val($(this).data('time'))
    });
})(jQuery);

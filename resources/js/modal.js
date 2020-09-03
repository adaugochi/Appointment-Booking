(function ($) {
    let confirmApt = $("[data-target='confirmApt']"),
        confirmAptModal = $("#confirmAptModal"),
        cancelApt = $("[data-target='cancelApt']"),
        cancelAptModal = $("#cancelAptModal"),
        viewApt = $("[data-target='viewApt']"),
        viewAptModal = $("#viewAptModal"),
        deactivateUser = $("[data-target='deactivateUser']"),
        deactivateUserModal = $("#deactivateUserModal"),
        resendInviteUser = $("[data-target='resendInviteUser']"),
        resendInviteUserModal = $("#resendInviteUserModal"),
        deactivateSecurity = $("[data-target='deactivateSecurity']"),
        deactivateSecurityModal = $("#deactivateSecurityModal"),
        resendInviteSecurity = $("[data-target='resendInviteSecurity']"),
        resendInviteSecurityModal = $("#resendInviteSecurityModal"),
        id = $(".id"),
        visitorName = $('.visitor-name'),
        visitorPnum = $('.visitor-pnum'),
        visitorReason = $('.visitor-reason'),
        scheduleDate = $(".visitor-sdate"),
        scheduleTime = $(".visitor-stime");

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

    viewApt.on('click', function (e) {
        e.preventDefault();
        viewAptModal.modal('show');
        scheduleDate.text($(this).data('date'));
        scheduleTime.text($(this).data('time'));
        visitorName.text($(this).data('name'));
        visitorPnum.text($(this).data('pnum'));
        visitorReason.text($(this).data('reason'));
    });
})(jQuery);

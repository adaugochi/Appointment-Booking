require('./bootstrap');
require('jquery-slimscroll');
require('./validation');
require('./jquery.name.badges');
require('./pagination');
require('./modal');
require('./image-upload');
require('./confirm-code');

(function ($) {
    let sidebarToggle = $(".custom-navbar__sidebar-toggle");
    let mainSidebar = $(".main-sidebar");
    let content = $(".content");
    let sideBar = $(".sidebar");
    let mainHeader = $(".main-header");
    let sidebarWidth = "204px";
    let slimscrollSize = "4px";
    let imageLabel = $(".image-label");
    let imagePreview = $(".image-preview");
    let imageName = $(".image-name");
    let screenBreakpoint = 768;
    let body = $("body");
    let iconToggle = $('.custom-navbar__logo');

    //Toggle Sidebar
    sidebarToggle.on('click', function () {
        if (window.innerWidth < screenBreakpoint) {
            body.toggleClass("sidebar-open");
        } else {
            body.toggleClass("sidebar-collapsed");
        }

        if (body.hasClass("sidebar-collapsed")) {
            iconToggle.find('.full-logo').addClass('d-none');
            iconToggle.find('.mini-logo').removeClass('d-none');
        } else {
            iconToggle.find('.full-logo').removeClass('d-none');
            iconToggle.find('.mini-logo').addClass('d-none')
        }
        body.trigger("change");
    });

    content.on("click", function () {
        $(this).removeClass("open");
        mainSidebar.removeClass("open");
    });

    //Initialise SlimScroll
    $(window).resize(function () {
        sideBar.slimScroll({
            width: sidebarWidth,
            size: slimscrollSize,
            height: ($(window).height() - mainHeader.height()) + "px",
        });

        let imageLabelWidth = imageLabel.width();
        imageLabel.css("height", imageLabelWidth);
        imagePreview.css("height",  imageLabelWidth);
    }).resize();

    imageName.nameBadge({
        border: {},
        size: 40
    });

    $('.side-menu li a').each(function() {
        if (this.href === window.location.href) {
            $(this).css('color', '#ff5a1a');
        }
    });

    // calender
   $('.calendar').pignoseCalendar({

    });

   // Time picker
    $('.timing').timepicker( {
        timeFormat: 'H:i',
        step: 30,
        minTime: '9:00',
        maxTime: '17:00',
        disableTextInput: true,
    });

})(jQuery);

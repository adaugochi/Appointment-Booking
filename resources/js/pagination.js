require('./paginathing.min');

(function ($) {

    $('.list-item-container').each(function () {
        $(this).find('tbody').paginathing({
            perPage: 10,
            limitPagination: 1,
            ulClass: 'pagination',
            liClass: 'page',
            activeClass: 'activeLink',
            disabledClass: 'disabled',
            insertAfter: ($(this))
        });
    })
})(jQuery);

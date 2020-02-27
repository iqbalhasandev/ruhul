(function($) {
    'use strict';
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > window.innerHeight/1.5) {
            $('.demo-tool').fadeIn('fast');
        } else {
            $('.demo-tool').fadeOut('fast');
        }
    });
    $('.demo-tool .tool-toggler').click(function() {
    	$('.demo-tool').toggleClass('show');
    });
    $('.demo-tool .tool-box .color-switcher li').on('click', function() {
        var path = $(this).data('path');
        $('#color-scheme').attr('href', path);
    });
}(jQuery));

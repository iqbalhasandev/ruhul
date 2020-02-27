(function($) {
    var progress = {
        /* ---------------------------------------------
            05. Animated Progress
        --------------------------------------------- */
        animated_progress: function() {
            $('.progress_bar > span').each(function() {
                var $this = $(this);
                var width = $(this).data('percent');
                $this.css({
                    'transition': 'width 3s'
                });
                setTimeout(function() {
                    $this.appear(function() {
                        $this.css('width', width + '%');
                    });
                }, 500);
            });
        },
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {
            progress.animated_progress();
        }
    };
    $(function() {
        progress.initializ();
    });

})(jQuery);
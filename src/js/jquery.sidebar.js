(function($){

    $.fn.sidebar = function(params){

        var defaults = {
            trigger: '.toggle-sidebar',
            duration: 500
        };

        params = $.extend({}, defaults, params);

        return this.each(function(){

            var $element = $(this);
            var $window = $(window);
            var $wrapper = $('#wrapper');
            var $main = $('#main');
            var $sidebar = $('#sidebar');
            var open = false;

            var outerClick = function(e){
                e.preventDefault();
                closeSidebar();
            };

            var openSidebar = function(e){
                $wrapper.animate({
                    left: '300px'
                }, params.duration, function(){
                    open = true;
                    $main.bind('click', outerClick);
                    $('a:not(.no-close)', $sidebar).bind('click', closeSidebar);
                });
            };

            var closeSidebar = function(e){
                $wrapper.animate({
                    left: '0px'
                }, params.duration, function(){
                    open = false;
                    $main.unbind('click', outerClick);
                    $('a:not(.no-close)', $sidebar).unbind('click', closeSidebar);
                });
            };

            var toggleSidebar = function(e){
                e.preventDefault();
                if (open) {
                    closeSidebar(e);
                } else {
                    openSidebar(e);
                }
            };

            $(params.trigger).click(toggleSidebar);

        });

    };

})(jQuery);

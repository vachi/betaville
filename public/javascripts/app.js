

!function ($) {
    $(function(){

        var $root = $('html, body');

        $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: ($(href).offset().top)-100
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
    })
}(window.jQuery)


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
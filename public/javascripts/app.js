!function ($) {
    $(function(){
        $('.navbar-nav a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top-50
            }, 500);
            $(".navbar-nav li").removeClass("active");
            $(this).parent("li").addClass("active");
            return false;
        });
    })
}(window.jQuery)


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
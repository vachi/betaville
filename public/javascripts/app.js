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
    });

$(function(){  
        $('#recent ul').ready( function(){
            $.ajax({ 
                url: 'http://5.9.20.212/service/service.php?',
                data: 'section=activity&request=proposals&quantity=6', 
                dataType: 'json', 
                success: function(data) 
                {
                    _.each(data.designs,function (val, key) {        
                        $("#recent ul").append('<li><a href="./project/'+val.designID+'"><img src="http://storage.betaville.net/designthumbs/'+val.designID+'.png"><span> <h2>'+val.name+'</h2><h5>AUTHOR:'+val.user+'CREATED'+val.date+'ID:'+val.designID+'</h5><p>'+val.description+'</p></span></a></li>');
                    });
                }
            });
    });
});
$(function(){  
    $('#project').ready( function(){
        var pathname = window.location.pathname;
        var pathname= pathname.substr(pathname.lastIndexOf('/') + 1);        

        $.ajax({ 
            url: 'http://5.9.20.212/service/service.php?',            
            data: 'section=design&request=findbyid&id='+pathname, 
            dataType: 'json', 
            success: function(data) 
            {
                
                    $("#project").append('<img src="http://storage.betaville.net/designthumbs/'+data.design.designID+'.png"><span> <h2>'+data.design.name+'</h2><h5>AUTHOR:'+data.design.user+'CREATED'+data.design.date+'ID:'+data.design.designID+'</h5><p>'+data.design.description+'</p></span>');
                
            }
        });
    });
});


$(function(){  
    $('#projects').ready( function(){
        $.ajax({ 
            url: 'http://5.9.20.212/service/service.php?',
            data: 'section=activity&request=proposals', 
            dataType: 'json', 
            success: function(data) 
            {
                console.log(data);
                _.each(data.designs,function (val, key) {        
                    $("#projects ul").append('<li><a href="./project/'+val.designID+'"><img src="http://storage.betaville.net/designthumbs/'+val.designID+'.png"><span> <h2>'+val.name+'</h2><h5>AUTHOR:'+val.user+'CREATED'+val.date+'ID:'+val.designID+'</h5><p>'+val.description+'</p></span></a></li>');
                });
            }
        });
    });
});


}(window.jQuery)


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



// response.header("Access-Control-Allow-Origin", "*");
// response.header("Access-Control-Allow-Headers", "X-Requested-With");


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

var imgsE = "this.onerror=null;this.src='/images/sorry.gif'";

$(function(){  
        if($('#recent ul').length >0 ){
            $.ajax({ 
                url: 'http://5.9.20.212/service/service.php?',
                data: 'section=activity&request=proposals&quantity=6', 
                dataType: 'json', 
                success: function(data) 
                {   
                    _.each(data.designs,function (val, key) {        
                        
                        $("#recent ul").append('<li><a href="./project/'+val.designID+'"><img src="http://storage.betaville.net/designthumbs/'+val.designID+'.png" onError="'+imgsE+';" /><span> <h2>'+val.name+'</h2><h5>author: <b>'+val.user+'</b></h5><h5>created: <b>'+val.date+'</b></h5><h5>id: <b>'+val.designID+'</b></h5><p>'+val.description+'</p></span></a></li>');
                    });
                }
            });
    };
});
$(function(){  
    if($('#project').length >0 ){
        var pathname = window.location.pathname;
        var pathname= pathname.substr(pathname.lastIndexOf('/') + 1);        

        $.ajax({ 
            url: 'http://5.9.20.212/service/service.php?',            
            data: 'section=design&request=findbyid&id='+pathname, 
            dataType: 'json', 
            success: function(data) 
            {
                $("#project .left h1").html(data.design.name);
                $("#project .left .author").html('author: <b>'+data.design.user+'</b>');
                $("#project .left .created").html('created: <b>'+data.design.date+'</b>');
                $("#project .left .id").html('id: <b>'+data.design.designID+'</b>');
                $("#project .left p").html(data.design.description);
                $("#project .right img").attr('src','http://storage.betaville.net/designthumbs/'+data.design.designID+'.png');
                $("#project .right img").attr('onError',imgsE);
                $("#project .right script").html('var map=L.mapbox.map("map","examples.map-20v6611k").setView(['+data.design.coordinate.lat+','+data.design.coordinate.lon+'],15);L.mapbox.markerLayer({type:"Feature",geometry:{type:"Point",coordinates:['+data.design.coordinate.lon+','+data.design.coordinate.lat+']},properties:{title:"'+data.design.name+'",description:"'+data.design.description+'","marker-size":"large","marker-color":"#ffcc00"}}).addTo(map);');

            }
        });
    };
});


$(function(){  
    if($('#projects').length >0 ){
        $.ajax({ 
            url: 'http://5.9.20.212/service/service.php?',
            data: 'section=activity&request=proposals', 
            dataType: 'json', 
            success: function(data) 
            {                        
                console.log(data);
                _.each(data.designs,function (val, key) {                
                    $("#projects ul").append('<li><a class="clearfix" href="./project/'+val.designID+'"><img src="http://storage.betaville.net/designthumbs/'+val.designID+'.png" onError="'+imgsE+';" /><span> <h2>'+val.name+'</h2><h5>author: <b>'+val.user+'</b></h5><h5>created: <b>'+val.date+'</b></h5><h5>id: <b>'+val.designID+'</b></h5><p>'+val.description+'</p></span></a></li>');
                });
            }
        });
    };
});


$(function(){  
    
    if($('#login').length >0 ){

        $('input[type="password"]').bind("enterKey",function(e){$("#loginForm button").click();});
        $('input[type="password"]').keyup(function(e){if(e.keyCode == 13){$(this).trigger("enterKey");}});

        $("#loginForm button").click(function() {
            var userVal = $("input[name='user']").val();
            var passVal = $("input[name='pass']").val();

            $.ajax({ 
                url: '/auth/'+userVal+'/'+passVal,                
                success: function(data) 
                {                        
                    // console.log(data);
                    if(data == true){window.location.replace("/admin");}                    
                    else{$("#loginForm .notice").html("Incorrect, try Again");}                    
                }
            });
        });
        
    };
});



}(window.jQuery)


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
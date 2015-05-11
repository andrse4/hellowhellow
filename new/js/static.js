$(document).ready(function() {
    (function() {
        //settings
        var fadeSpeed = 200, fadeTo = 1, topDistance = 30;
        var topbarME = function() { $('#hellowMenu').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#hellowMenu').fadeTo(fadeSpeed,fadeTo); };
        var inside = false;
        //do
        $(window).scroll(function() {
            position = $(window).scrollTop();
            if(position > topDistance && !inside && screen.width>=750) {
                //add events
                topbarML();
                $('#hellowMenu').bind('mouseenter',topbarME);
                $('#hellowMenu').bind('mouseleave',topbarML);
                $('#inicio').css({'display':'none'});
                $('#logo').css({'display':'none'});
                $('#logoM').css({'display':'block'});
                inside = true;
            }
            else if (position < topDistance && screen.width>=750){
                topbarME();
                $('#hellowMenu').unbind('mouseenter',topbarME);
                $('#hellowMenu').unbind('mouseleave',topbarML);
                $('#inicio').css({'display':''});
                $('#logo').css({'display':''});
                $('#logoM').css({'display':'none'});
                inside = false;
            }
            if($(window).scrollTop() > topDistance && screen.width>=750){
              $('#hellowMenu').css({'height': '132'});
              $('#headerLinks').css({'margin-top': '40px'});

            }else{
              if(screen.width>=750){
                $('#hellowMenu').css({'height': '180'});
                $('#headerLinks').css({'margin-top': '0px'});
              }
            }
        });
    })();
});

$(document).ready(function() {
    (function() {
        //settings
        var fadeSpeed = 200, fadeTo = 1, topDistance = 30;
        var topbarME = function() { $('#hellowMenu').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#hellowMenu').fadeTo(fadeSpeed,fadeTo); };
        var inside = false;
        //do
        $(window).scroll(function() {
            position = $(window).scrollTop();
            if(position > topDistance && !inside) {
                //add events
                topbarML();
                $('#hellowMenu').bind('mouseenter',topbarME);
                $('#hellowMenu').bind('mouseleave',topbarML);
                $('#inicio').css({'display':'none'});
                $('#logo').css({'display':'none'});
                $('#logoM').css({'display':'block'});
                inside = true;
            }
            else if (position < topDistance){
                topbarME();
                $('#hellowMenu').unbind('mouseenter',topbarME);
                $('#hellowMenu').unbind('mouseleave',topbarML);
                $('#inicio').css({'display':''});
                $('#logo').css({'display':''});
                $('#logoM').css({'display':'none'});
                inside = false;
            }
            if($(window).scrollTop() > topDistance){
              $('#logo').css({'height': '50'});
              $('#logo').css({'margin-top': '10px'});
              $('#hellowMenu').css({'height': '132'});
              $('#logoM').css({'height': '50'});
              $('#headerLinks').css({'margin-top': '40px'});
              $('#logoM').css({'margin-top': '-25px'});
            }else{
                $('#logo').css({'height': '90'});
                $('#logo').css({'margin-top': '5px'});
                $('#hellowMenu').css({'height': '180'});
                $('#headerLinks').css({'margin-top': '0px'});
            }
        });
    })();
});

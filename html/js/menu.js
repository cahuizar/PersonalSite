// JavaScript Document
$(document).ready(function(){        
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() >450) {
                $('.menu').fadeIn(500);
            } else {
                $('.menu').fadeOut(500);
            }
        });
    });
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 150
			
	    },1000, 'swing');
	});
 
 window.addEventListener("load", function(){
	 var load_screen = document.getElementById("loader");
	 var display_content = document.getElementById("hide_for_loading");
	 document.body.removeChild(load_screen);
	 display_content.style.visibility = 'visible';
 });
});

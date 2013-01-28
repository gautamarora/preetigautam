//slides
		$(function(){
			$('#slides').slides({
				preload: true,
				preloadImage: '_images/loading.gif',
				play: 5000,
				pause: 2500,
				hoverPause: true,
				effect: 'fade'
			});
			
		});
		
		$(function(){
			$('#slides-story').slides({
				play: 50000,
				pause: 25000,
				hoverPause: true,
				effect: 'fade'
			});
			
		});
		
//menu-hide
$(window).scroll(function(){
               var pagetop = $(this).scrollTop();
               var top = 120;
               if (pagetop >= top) {
                 $('div.hidden-menu').slideDown();
    						 $('div#footer-logo').fadeIn();
               }
               if (pagetop <= top) {
                 $('div.hidden-menu').fadeOut();
    						 $('div#footer-logo').fadeOut();
               }

     });
	 
//social-hide
$(window).scroll(function(){
               var pagetop = $(this).scrollTop();
			   if (pagetop >= 600) {
                         $('div.social').slideDown();
               }
			   
               if (pagetop <= 600) {
                         $('div.social').fadeOut();
               }

     });

//scroll
$(document).ready(function(){
	$(".scroller").click(function(event){
		
		event.preventDefault();

	
		var full_url = this.href;

		
		var parts = full_url.split("#");
		var trgt = parts[1];

		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;


		$('html, body').animate({scrollTop:target_top}, 900);
	});
});

//pretty-image
$(document).ready(function(){
	$(".image-area a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'dark_square',slideshow:2000, autoplay_slideshow: false});
});

//play-music
$(document).ready(function(){
      $("#music-player").jPlayer({
        ready: function() {
          $(this).jPlayer("setMedia", {
            mp3: "_music/splitsvilla.mp3"
          }).jPlayer("play");
          var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          var kickoff = function () {
            $("#music-player").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
          };
          document.documentElement.addEventListener(click, kickoff, true);
        },
        loop: true,
        swfPath: "/js"
      });
});

//socials
$(window).scroll(function(){
               var pagetop = $(this).scrollTop();
               if (pagetop >= 1000) {
                         $('div#social').slideDown();
               }
               if (pagetop <= 1000) {
                         $('div#social').fadeOut();
               }

     });

$(function()
	{
		$("#s").click(function(event) {
		event.preventDefault();
		$(".social").slideToggle();
		});

	});
	 
//functions
	$(function()
	{

		$("#m1").click(function(event) {
		event.preventDefault();
		$("#div-m").slideToggle();
		$("#div-h").slideToggle();
		});
		
		$("#m2").click(function(event) {
		event.preventDefault();
		$("#div-m").slideToggle();
		$("#div-r").slideToggle();
		});
		
		$("#m3").click(function(event) {
		event.preventDefault();
		$("#div-m").slideToggle();
		$("#div-o").slideToggle();
		});
	
		$("#h").click(function(event) {
		event.preventDefault();
		$("#div-h").slideToggle();
		$("#div-m").slideToggle();
		});
		
		$("#r").click(function(event) {
		event.preventDefault();
		$("#div-r").slideToggle();
		$("#div-m").slideToggle();
		});
	
		$("#o").click(function(event) {
		event.preventDefault();
		$("#div-o").slideToggle();
		$("#div-m").slideToggle();
		});
		
		$("#music-control-top").click(function(event) {
		    var status = $("#music-control-top img").attr("src") == "_images/music-on.png" ? "play" : "pause";
		    if(status == "play") {
		        $("#music-player").jPlayer("pause");
		        $("#music-control-top img").attr("src", "_images/music-off.png");
		        $("#music-control-hidden img").attr("src", "_images/music-off.png");
	        } else {
	            $("#music-player").jPlayer("play");
		        $("#music-control-top img").attr("src", "_images/music-on.png");
		        $("#music-control-hidden img").attr("src", "_images/music-on.png");
	        }
	    });

		$("#music-control-hidden").click(function(event) {
		    var status = $("#music-control-top img").attr("src") == "_images/music-on.png" ? "play" : "pause";
		    if(status == "play") {
		        $("#music-player").jPlayer("pause");
		        $("#music-control-top img").attr("src", "_images/music-off.png");
		        $("#music-control-hidden img").attr("src", "_images/music-off.png");
	        } else {
	            $("#music-player").jPlayer("play");
		        $("#music-control-top img").attr("src", "_images/music-on.png");
		        $("#music-control-hidden img").attr("src", "_images/music-on.png");
	        }
	    });
		
	});
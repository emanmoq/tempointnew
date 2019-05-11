$(document).ready(function () { 

    $(".Bigoverlay").click(function() {
        $(this).css("display","none");
      });
$(" .sideVideo .close ").click(function() {    
    $(this).parent().css("display","none");
    $(".Bigoverlay").css("display","none");

});
$(" .mobileContact .close ").click(function() {    
    $(this).parent().css("display","none");
    $(".Bigoverlay").css("display","none");

});
$(" .collapse .close ").click(function() {    
    $(this).parent().parent().css("display","none");
    $(".Bigoverlay").css("display","none");

});
$(window).scrollTop(0);

    $('form').validate();


	  sideVideo=false;

      $(".sideMenu .national").click(function(e) {
        e.preventDefault();
        if(!sideVideo){
          $(".sideVideo").animate({left:70,}, 400, function() {});
          $('.sideMenu .national').addClass('active');
          $(".Bigoverlay").css("display","block");

        }else{
          $(".sideVideo").animate({left:-1000,}, 400, function() {});
          $('.sideMenu .national').removeClass('active');

        }
        
        setTimeout(function(){
            sideVideo=!sideVideo
            
        },400);
    });

    $("body").children().not('.sideVideo').not('.sideMenu').not('.nationalBar').click(function(){
        var leg=$('.youtube').attr("src");
        $('.youtube').attr("src",leg);
      $(".sideVideo").animate({left:-735,}, 400, function() {});
              $('.sideMenu .national').removeClass('active');

  });
      

    $('.sliderSec-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

      $(".nationalBar .national").click(function() {
		  if(sideVideo){
			$(".sideVideo").animate({top:-1000,}, 200, function() {});
		    
		  }else{
				$(".sideVideo").animate({top:94,}, 200, function() {});
		  }
		  setTimeout(function(){
			  sideVideo=!sideVideo
			  
		  },400);
      });
      
    scrollShow = false;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

		if(scrollTop > (($('#OurProjects').offset().top-$('.contactForm').height()-100))){

		$('.navbar').addClass('scrollNav');
            $('.contactForm').not('.mobileContact').removeClass('scrollForm');
            $('.contactForm').not('.mobileContact').css('top',($('#OurProjects').offset().top-$('.contactForm').height()-100));

		}
        else if (scrollTop > $('#projSection').offset().top) {
			
           
            $('.navbar').addClass('scrollNav');
            $('.contactForm').not('.mobileContact').addClass('scrollForm');
            $('.contactForm').not('.mobileContact').css('top','');

            
            }
        else{
            $('.navbar').removeClass('scrollNav');
            $('.contactForm').not('.mobileContact').removeClass('scrollForm');
            $('.contactForm').not('.mobileContact').css('top','');

          
        }
    });
    $(".contactus").click(function(){
        $(".mobileContact").css("display","block");
        $('.mobileContact form').removeAttr('novalidate');
        $(".mobileContact form").validate();

    });

    $(".navBtn").click(function() {
        $(".collapse.navbar-collapse").css("display","block");
        $(".Bigoverlay").css("display","block");
      });
  
    
    $(".projectProp").click(function() { 
	
	$('.nav-link').removeClass('activeLink');
	$(this).addClass('activeLink');
	
        $('html, body').animate({
            scrollTop: $("#projSection").offset().top
        }, 2000);
    });
	
    $(".flatlink").click(function() {   
	
	$('.nav-link').removeClass('activeLink');
	$(this).addClass('activeLink');
	
	
        $('html, body').animate({
            scrollTop: $("#flatSection").offset().top
        }, 2000);
    });
    $(".faciltiis").click(function() {   
	
	$('.nav-link').removeClass('activeLink');
	$(this).addClass('activeLink');
	
        $('html, body').animate({
            scrollTop: $("#faciltiisSection").offset().top
        }, 2000);
    });
    $(".flatSpace").click(function() {   
	$('.nav-link').removeClass('activeLink');
	$(this).addClass('activeLink');
	
        $('html, body').animate({
            scrollTop: $("#flatSpaceSection").offset().top
        }, 2000);
    });
    $(".ourProjectLink").click(function() {   
	$('.nav-link').removeClass('activeLink');
	$(this).addClass('activeLink');
	
        $('html, body').animate({
            scrollTop: $("#OurProjects").offset().top
        }, 2000);
    });
    $(".ourServicesLink").click(function() {   
	
	$('.nav-link').removeClass('activeLink');
	$(this).addClass('activeLink');
	
        $('html, body').animate({
            scrollTop: $("#ourServices").offset().top
        }, 2000);
    });
    $(".spaceBox").click(function() {   
	
        $('.spaceBox').removeClass('active');
        $(this).addClass('active'); 
        var src = $(this).attr('data-src');
        $('.flatImg img').attr('src', src);
        });
              	  

  if($('body').width()<500){
    $('.flat-space').addClass('flat-space-carousel owl-carousel');
}

  
  $('.flat-space-carousel').owlCarousel({
      loop:true,
      autoplay:false,
      margin:20,
   
      responsive:{
          0:{
              items:3
          },
          600:{
          items:4,
          }
      }
  });
  $('.mainSlider').owlCarousel({
    loop:true,
    autoplay:false,
    margin:20,
    dots:true,
 
    responsive:{
        0:{
            items:1
        },
    }
})
  

         

});


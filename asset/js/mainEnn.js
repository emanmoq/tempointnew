$(document).ready(function () { 

  sideVideo=false;
  sideTabo=false;
  $(".Bigoverlay").click(function() {

    $(this).css("display","none");
    sideVideo=false;
    sideTabo=false;

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



      $(".sideMenu .national").click(function(e) {
        e.preventDefault();
        if(!sideVideo){
          $(".sideVideo").animate({left:70,}, 400, function() {});
          $('.sideMenu .national').addClass('active');
          $(".Bigoverlay").css("display","block");

        }else{
          $(".sideVideo").animate({left:-1000,}, 400, function() {});
          $('.sideMenu .national').removeClass('active');
          $(".Bigoverlay").css("display","none");


        }
        
        setTimeout(function(){
            sideVideo=!sideVideo
            
        },400);
    });
    $(".sideMenu .tabo").click(function(e) {
        
        e.preventDefault();

        if(!sideTabo){
          $(".sideTabo").animate({left:70,}, 400, function() {});
          $('.sideMenu .tabo').addClass('active');
          $(".Bigoverlay").css("display","block");
        }else{
          $(".sideTabo").animate({left:-1000,}, 400, function() {});
          $('.sideMenu .tabo').removeClass('active');
          $(".Bigoverlay").css("display","none");
          
        }
        
        setTimeout(function(){
          sideTabo=!sideTabo
            
        },400);
       
    });

    $("body").children().not('.sideVideo').not('.sideMenu').not('.nationalBar').not("sideTabo").click(function(){
        var leg=$('.youtube').attr("src");
        $('.youtube').attr("src",leg);
      $(".sideVideo").animate({left:-735,}, 400, function() {});
      $(".sideTabo").animate({left:-735,}, 400, function() {});
      $('.sideMenu .tabo').removeClass('active');

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
      $(".nationalBar .tabo").click(function() {
        if(sideTabo){

          $(".sideTabo").animate({top:-1000,}, 200, function() {});
          
        }else{
              $(".sideTabo").animate({top:94,}, 200, function() {});
        }
        setTimeout(function(){
            sideTabo=!sideTabo
            
        },200);
        
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
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop()

        if(scrollTop>=$("#projSection").offset().top & scrollTop < $("#flatSection").offset().top ){
            $('.nav-link').removeClass('activeLink');
            $(".projectProp").addClass('activeLink');
        }
        else if(scrollTop>=$("#flatSection").offset().top & scrollTop < $("#faciltiisSection").offset().top ){
            $('.nav-link').removeClass('activeLink');
            $(".flatlink").addClass('activeLink');
        }
        else if(scrollTop>=$("#faciltiisSection").offset().top & scrollTop < $("#flatSpaceSection").offset().top){
            $('.nav-link').removeClass('activeLink');
            $(".faciltiis").addClass('activeLink');
        }
        else if(scrollTop>=$("#flatSpaceSection").offset().top & scrollTop < $("#OurProjects").offset().top){
            $('.nav-link').removeClass('activeLink');
            $(".flatSpace").addClass('activeLink');
        }
     
        else if(scrollTop>=$("#OurProjects").offset().top & scrollTop < $("#ourServices").offset().top ){
            $('.nav-link').removeClass('activeLink');
            $(".ourProjectLink").addClass('activeLink');
        }
        else if(scrollTop>=$("#ourServices").offset().top){
            $('.nav-link').removeClass('activeLink');
            $(".ourServicesLink").addClass('activeLink');
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
            $(".Bigoverlay").css("display","none");
        
            $('.flat-space').addClass('flat-space-carousel owl-carousel');
            $(" .sideVideo .close ").click(function() {    
                $(this).parent().animate({top:-1000,}, 200, function() {});
                $(".Bigoverlay").css("display","none");
                $('.sideMenu .national').removeClass('active');
        
              sideVideo=false;
            
            });
            $(" .sideTabo .close ").click(function() {    
                $(this).parent().animate({top:-1000,}, 200, function() {});
                $(".Bigoverlay").css("display","none");
                $('.sideMenu .tabo').removeClass('active');
             sideTabo=false;
            
            });
            $("body .Bigoverlay").click(function() {    
                $(".collapse.navbar-collapse").css("display","none");
                $(".Bigoverlay").css("display","none");
        
            });
            
        }
        else{
            $(" .sideVideo .close").click(function() {  
        
                $(this).parent().animate({left:-1000,}, 200, function() {});
                $(".Bigoverlay").css("display","none");
                $('.sideMenu .national').removeClass('active');
                sideVideo=false;
                
        
            
            });
            $(" .sideTabo .close").click(function() {  
        
                $(this).parent().animate({left:-1000,}, 200, function() {});
                $(".Bigoverlay").css("display","none");
                $('.sideMenu .tabo').removeClass('active');
                 sideTabo=false;
                
        
            
            });
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


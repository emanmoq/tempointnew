$(document).ready(function () { 
    sideVideo=false;
    sideTabo=false;
    $('form').validate();


    $(".overlay").click(function() {
        $(".mobileContact").css("display","none");
     $(this).css("display","none");
    });




$(window).scrollTop(0);

    $('form').validate();
    $('.sliderSec-carousel').owlCarousel({
        autoplay:false,
        loop:false,
        margin:20,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    scrollShow = false;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

         if( scrollTop >0){
            $('.headerNav').addClass('scrollNav');

         }



    if(scrollTop > $('.stepsSection').offset().top && scrollTop < $('.nationatSteps').offset().top-$('.MoveImg').height()){

            $('.MoveImg').addClass('scrollImg');
            $('.MoveImg').removeClass('scrollImg_bottom');


		}
        else if( scrollTop > $('.nationatSteps').offset().top-$('.MoveImg').height()) {
          $('.MoveImg').removeClass('scrollImg');
            $('.MoveImg').addClass('scrollImg_bottom');
            }
        else{
            $('.MoveImg').removeClass('scrollImg');
            $('.MoveImg').removeClass('scrollImg_bottom');
        }
       



    if(scrollTop > $('.nationatSteps').offset().top && scrollTop < $('.OurProjects').offset().top-$('.secMoveImg').height()){

            $('.secMoveImg').addClass('scrollImg');
            $('.secMoveImg').removeClass('scrollImg_bottom');

        }
        else if( scrollTop > $('.OurProjects').offset().top-$('.secMoveImg').height()) {
            $('.secMoveImg').removeClass('scrollImg');
            $('.secMoveImg').addClass('scrollImg_bottom');
            }
        else{
            $('.secMoveImg').removeClass('scrollImg');
            $('.secMoveImg').removeClass('scrollImg_bottom');
        }

 
    });
    $(".navBtn").click(function() {
        $(".collapse.navbar-collapse").css("display","block");
        $(".Bigoverlay").css("display","block");
      });

      
      $(window).scroll(function () {
        scrollTop = $(window).scrollTop()

        if(scrollTop>=$("#step1").offset().top & scrollTop < $("#step2").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step1 .stepNum").addClass('activestepNum');
        }
        else if(scrollTop>=$("#step2").offset().top & scrollTop < $("#step3").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step2 .stepNum").addClass('activestepNum');
        }
        else if(scrollTop>=$("#step3").offset().top & scrollTop < $("#step4").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step3 .stepNum").addClass('activestepNum');
        }
      
        else if(scrollTop>=$("#step4").offset().top & scrollTop < $(".nationatSteps").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step4 .stepNum").addClass('activestepNum');
        }
        else if(scrollTop>=$("#step5").offset().top & scrollTop < $("#step6").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step5 .stepNum").addClass('activestepNum');
        }
        else if(scrollTop>=$("#step6").offset().top & scrollTop < $("#step7").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step6 .stepNum").addClass('activestepNum');
        }
        else if(scrollTop>=$("#step6").offset().top & scrollTop < $(".OurProjects").offset().top ){
            $('.stepNum').removeClass('activestepNum');
            $("#step7 .stepNum").addClass('activestepNum');
        }
        if(scrollTop>=$(".stepsSection").offset().top & scrollTop < $(".nationatSteps").offset().top){
            $('.nav-link').removeClass('activeLink');
            $(".StepsLink").addClass('activeLink');
        }
        else if(scrollTop>=$(".nationatSteps").offset().top & scrollTop < $(".OurProjects").offset().top){
            $('.nav-link').removeClass('activeLink');
            $(".nationalLink").addClass('activeLink');
        }
        else if (scrollTop>=$(".OurProjects").offset().top){
            $('.nav-link').removeClass('activeLink');
            $(".ProjectsLink").addClass('activeLink');
        }


    });
       
    $(".StepsLink").click(function() { 
	
        $('.nav-link').removeClass('activeLink');
        $(this).addClass('activeLink');
        
            $('html, body').animate({
                scrollTop: $("#stepsSec").offset().top
            }, 1000);
        });
        $(".nationalLink").click(function() { 
	
            $('.nav-link').removeClass('activeLink');
            $(this).addClass('activeLink');
            
                $('html, body').animate({
                    scrollTop: $("#nationatSteps").offset().top
                }, 1000);
            });
            $(".ProjectsLink").click(function() { 
	
                $('.nav-link').removeClass('activeLink');
                $(this).addClass('activeLink');
                
                    $('html, body').animate({
                        scrollTop: $("#OurProjects").offset().top
                    }, 1000);
                });
        
    
  
                if($('body').width()<500){  
                    $('.Stepsec').addClass('stepsCarusel owl-carousel');
                    $('.stepNum').removeClass('activestepNum');
                    $('.nav').addClass('navCarusel owl-carousel');  
                }
                $(".contactsec").click(function(){
                    $(".mobileContact").css("display","block");
                    $('.mobileContact form').removeAttr('novalidate');
                    $(".mobileContact form").validate();
                    $(".overlay").css("display","block");

            
                });
                $(" .mobileContact .closeform ").click(function() {    
                    $(this).parent().css("display","none");
                    $(".overlay").css("display","none");
            
                });
  $('.navCarusel').owlCarousel({
      loop:true,
      autoplay:false,
      margin:0,
      rtl:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1.5
          },
          600:{
          items:4,
          }
      }
  })
  $('.stepsCarusel').owlCarousel({
    loop:true,
    autoplay:false,
    margin:20,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
        items:4,
        }
    }
})


$('.projectSlider').owlCarousel({
    loop:true,
    autoplay:false,
    margin:20,
    rtl:true,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
});
$('.hero-carusel').owlCarousel({
    loop:true,
    autoplay:false,
    margin:20,
    rtl:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
    }
});

  
});


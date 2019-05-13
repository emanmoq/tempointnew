$(document).ready(function () { 
    sideVideo=false;
    sideTabo=false;


    $(".Bigoverlay").click(function() {
        sideTabo=false;  
        sideVideo=false;
     $(this).css("display","none");
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

		if(scrollTop < (($('.stepsSection').offset().top-$('.MoveImg').height()-40))){

        $('.navbar').addClass('scrollNav');
            $('.MoveImg').removeClass('scrollImg');
            $('.MoveImg').css('top',($('.stepsSection').offset().top-$('.MoveImg').height()-40));

		}
        else if (scrollTop > $('.nationatSteps').offset().top) {
            $('.navbar').addClass('scrollNav');
            $('.MoveImg').addClass('scrollImg');
            $('.MoveImg').css('top','');

            
            }
        else{
            $('.navbar').removeClass('scrollNav');
            $('.MoveImg').removeClass('scrollImg');
            $('.MoveImg').css('top','');

          
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
    });
  
      
  $('.flat-space-carousel').owlCarousel({
      loop:true,
      autoplay:false,
      margin:20,
      rtl:true,
   
      responsive:{
          0:{
              items:3
          },
          600:{
          items:4,
          }
      }
  })
  
  $('.mainSlider').owlCarousel({
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


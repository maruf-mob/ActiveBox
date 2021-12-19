//back to top btn function;

$(window).scroll(function(){
   var scrolling = $(this).scrollTop();
   if(scrolling > 750){
      $('#back-top').fadeIn();
   }else{
      $('#back-top').fadeOut();
   }
   
   if(scrolling > 300){
      $('nav').addClass('nav-color');
   }else{
      $('nav').removeClass('nav-color');
   }
});

//back to top click function;

$('#back-top').click(function(){
   $('html,body').animate({
      scrollTop:'0px',      
   },500);
});
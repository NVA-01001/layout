$(document).ready(function() {
  $('.burger').on('click', function() {
    $('.header__nav').toggleClass('nav__active');
    $('.burger').toggleClass('burger__close');
  });
  $('header__nav').on('click', function(event) {
    if(event.target == this){
    $(this).fadeOut(); 
    }
  });
});
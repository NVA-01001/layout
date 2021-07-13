$(document).ready(function () {


  $('.header_btn, .title__btn, .advantages_btn, .example-work_btn, .btn-bottom').on('click', function () {
    $('.popup').toggleClass('popup__active');
    $('body').toggleClass('scrol__none');
    $('.popup__container').animate({
      opacity: '1',
    }, 400);
  });

  $('.popup').on('click', function (event) {
    if (event.target == this) {
      $(this).toggleClass('popup__active');
      $('body').toggleClass('scrol__none');
      $('.popup__content').fadeIn();
      $('.thanks-popup').fadeOut();
    }

  });

  $('.popup__close').on('click', function () {
    $('.popup').toggleClass('popup__active');
    $('body').toggleClass('scrol__none');
    $('.popup__content').fadeIn();
    $('.thanks-popup').fadeOut();
  });
});
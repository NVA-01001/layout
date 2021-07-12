$(document).ready(function() {
  function createSlider() {
    let slider = new Swiper('.image-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
      slidesPerView: 3,
      loop: true,
      loopedSlides: 3,  
      spaceBetween: 30,

      autoplay: {
        delay: 5000,
      },
      
      speed: 500,
    
      breakpoints: {
        320: {
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }, 
        },
        650: {
          slidesPerView: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }, 
        },
        1025: {
            slidesPerView: 3,
        },
        
      }
    });
  }
  createSlider();
 
});


// $("a").click(function () {
//   var elementClick = $(this).attr("href");
//   var destination = $(elementClick).offset().top;
//   $('html, body').animate({ scrollTop: destination }, 600);
//   return false;
// });


$(document).ready(function() {

  function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  let A = document.querySelector('.scroll__link1');
  let B = document.querySelector('.scroll__link2');
  let C = document.querySelector('.scroll__link3');
  let AA = document.querySelector('.advantages_text');
  let BB = document.querySelector('.example-work_bg');
  let CC = document.querySelector('.job_price');
  
  A.addEventListener('click', () => {
    scrollTo(AA);
  })
  B.addEventListener('click', () => {
    scrollTo(BB);
  })
  C.addEventListener('click', () => {
    scrollTo(CC);
  })
});
$("a").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({ scrollTop: destination }, 600);
  return false;
});


// $(document).ready(function() {

//   function scrollTo(element) {
//     window.scroll({
//       left: 0, 
//       top: element.offsetTop, 
//       behavior: 'smooth'
//     })
//   }
  
//   let A = document.querySelector('.link__scroll1');
//   let B = document.querySelector('.link__scroll2');
//   let C = document.querySelector('.link__scroll3');
//   let AA = document.querySelector('.advantages_text');
//   let BB = document.querySelector('.example-work_bg');
//   let CC = document.querySelector('.job_price');
  
//   A.addEventListener('click', () => {
//     scrollTo(AA);
//   })
//   B.addEventListener('click', () => {
//     scrollTo(BB);
//   })
//   C.addEventListener('click', () => {
//     scrollTo(CC);
//   })
// });
// $('.sliderx').slick({
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows:false,
//     fade:true
// });



$(document).scroll(function() {
  navbarScroll();
});

function navbarScroll() {
  var y = window.scrollY;
  if (y > 10) {
    $('header').addClass('small');
  } else if (y < 10) {
    $('header').removeClass('small');
  }
}
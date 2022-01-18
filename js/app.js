AOS.init();

$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  prevArrow: "",
  nextArrow: `<div class="testimonial-icon"><img src="./images/icon-arrow.svg" alt=""></div>`,
});

window.addEventListener('load', function() {
  const menu = document.querySelector('.menu')
  const toggle = document.querySelector('.toggle')
  toggle.onclick = function() {
    menu.classList.add('is-active')
  }
  document.onclick = function(e) {
    console.log(e.target)
    if (!menu.contains(e.target) && !e.target.matches('.toggle')) {
      menu.classList.remove("is-active")
    }
  }
})
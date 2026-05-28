window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", function () {
  var carouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (window.bulmaCarousel) {
    window.bulmaCarousel.attach(".carousel", carouselOptions);
  }

  if (window.bulmaSlider) {
    window.bulmaSlider.attach();
  }
});

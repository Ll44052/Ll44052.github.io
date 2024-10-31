$(document).ready(function() {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [{breakpoint: 1024, settings: {slidesToShow: 1}}]
  });
});

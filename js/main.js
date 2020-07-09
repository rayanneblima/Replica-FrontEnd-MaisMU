$(document).ready(function () {
  // AUTO PLAY VIDEO
  $('.thumb').click(function() {
    $(".videoautoplay").attr('src', $(".videoautoplay").attr('src') + '?autoplay=1'); 
  });

  // IMAGE SLIDER
  $('.produtos').slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.feedback-container').slick({
    dots: true,
    centerMode: true,
    autoplay: true,
    centerPadding: '80px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      /*{
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }*/
    ]
  });



});



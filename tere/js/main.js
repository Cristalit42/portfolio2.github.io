$(function (){


  $('.work__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    dots: true,
    appendDots: ('.work__slider-dots'),
  })

  $(".header__nav-list a, .footer__logo-link").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 150
    $('body,html').animate({ scrollTop: top }, 1500)
  });


})



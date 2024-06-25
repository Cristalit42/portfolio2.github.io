$(function(){

  $('.story__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })



  $('.review__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
  })

  $('.review__prev').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickPrev')
  })

  $('.review__next').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickNext')
  })



})

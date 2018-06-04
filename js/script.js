//Mobile menu
$('.menu__btn').click(function(e) {
  e.stopPropagation();
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

$('.top-menu__choice').click(function(e) {
  e.stopPropagation();
  $('.top-menu__city').slideToggle();
})

//Hide popups on escape and click outside
$("body").click(function(){
  $('.top-menu__city').slideUp();
})

$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('.top-menu__city').slideUp();
  }
})

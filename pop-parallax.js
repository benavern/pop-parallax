/**
 * pop parallax effect by ZeZeN
 * benavern.github.io
 */
'use strict';

/*This is the main purpose :)*/
function pop(){
  $('.pop').each(function (){
    /* Check the location of each desired element */
    var topOfObject = $(this).offset().top;
    var enteringWindow = $(window).scrollTop() + $(window).height() * 0.8;

    /* If the top of the object reached the 1/5th from the bottom of the window, fade it in */
    if (enteringWindow > topOfObject) {
      $(this).addClass('popped');
    }
  });

  /*reset when on top of the window*/
  if ($(window).scrollTop() === 0) {
    $('.pop.popped').removeClass('popped');
  }
}

/*when document ready we can begin playing*/
$(document).ready(function () {
  /*on load...*/
  pop();

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    pop();
  });
});

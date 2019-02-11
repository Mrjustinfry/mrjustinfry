'use strict'

function getYear() {
    let today = new Date();
    let year = today.getFullYear();
    return year;
}

function displayYear() {
    $('#year').text(getYear());
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('body').css('background-color', $("#one").attr("data-color"));
}

function dropDown() {
$('.menu').on('click', function(){
  $('.dropDown').css('display', 'flex');
})
}

function closeNav() {
$('.close').on('click', function(){
  $('.dropDown').css('display', 'none');
})
}

function linkSwap() {
  $('.navContact').hide();
  $('#openLink').on('click', function() {
    $('.navContact').toggle('hidden');
  })
}

function colorSwap() {
  $(window).scroll(function () {
    $('.navContact').hide();
    if ($(document).scrollTop() >= $("#one").position().top) {
          $('#top').css('display', 'none');
          $('.about').css('visibility', 'hidden');
          $('body').css('background-color', $("#one").attr("data-color"));
    };
    if ($(document).scrollTop() > $("#two").position().top) {
          $('#top').css('display', 'block');
          $('.about').css('visibility', 'initial');
          $('.projects').css('visibility', 'hidden');
          $('body').css('background-color', $("#two").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#three").position().top) {
          $('#top').css('display', 'block');
          $('.projects').css('visibility', 'initial');
          $('body').css('background-color', $("#three").attr("data-color"))
    };
});
}

(function () {
  $('#top').on('click', function(e) {
  e.preventDefault();
  toTop();
  $('#top').css('display', 'none');
})
displayYear();
dropDown();
closeNav();
colorSwap();
linkSwap();
})();

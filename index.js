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

function colorSwap() {
  $(window).scroll(function () {
    if ($(document).scrollTop() >= $("#one").position().top) {
            $('body').css('background-color', $("#one").attr("data-color"));
    };
    if ($(document).scrollTop() > $("#two").position().top) {
            $('body').css('background-color', $("#two").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#three").position().top) {
            $('body').css('background-color', $("#three").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#four").position().top) {
            $('body').css('background-color', $("#four").attr("data-color"))
    };
});
}

(function () {
  $('#top').on('click', function(e) {
  e.preventDefault();
  toTop();
})
displayYear();
dropDown();
closeNav();
colorSwap();
})();

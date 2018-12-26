'use strict';

function getYear() {
    let today = new Date();
    let year = today.getFullYear();
    return year;
}

function displayYear() {
    $('#year').text(getYear());
}

displayYear();

'use strict';
let icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
let timerId = setInterval(() => {
    i++;
    let icon = document.querySelector('.section-1-icons .active');
    icon.classList.remove('active');
    if(i > icons.length) {
        icons[0].classList.add('active');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('active');
    }
}, 1000);

setTimeout(() => {
    clearInterval(timerId);
}, 10100);
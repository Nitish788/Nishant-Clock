"use strict";
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
setInterval(function() {
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const hrRotation = 30 * hr + min / 2;
    const minRotation = 6 * min;
    const secRotation = 6 * sec;
    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
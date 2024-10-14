const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

const birthdayDate = new Date("oct 15, 2024 00:00:00").getTime()

update()

function update(){
    const now = new Date().getTime();
    const gap = birthdayDate - now;

    const sec = 1000;
    const mins = sec * 60;
    const hour = mins * 60;
    const day = hour * 24;

    const D = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / mins);
    const s = Math.floor((gap % mins) / sec);

    dayEl.innerText = D;
    hourEl.innerText = h;
    minsEl.innerText = m;
    secEl.innerText = s;

    setTimeout(update)
}
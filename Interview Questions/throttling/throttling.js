/* Throttling */
/* Throttling in JavaScript */

// Ref:
// 1. https://www.youtube.com/watch?v=1er63_Ki7MI
// 2. https://www.youtube.com/watch?v=1er63_Ki7MI
// 3. https://www.youtube.com/watch?v=tJhA0DrH5co

const btn = document.getElementById('btn');

function clickLog() {
    console.log('clicked');
}

btn.addEventListener('click', throttleFn(clickLog, 2000));

function throttleFn(cb, delay) {
    let lastTime = 0;

    return function (...args) {
        let now = new Date().getTime();


        if (now - lastTime < delay) return;

        lastTime = now;
        cb(...args);
    }
}
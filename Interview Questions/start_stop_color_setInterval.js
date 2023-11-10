/*
    <button id="start">Start</button>
    <button id="stop">Stop</button>
*/

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let intervalId;

function getRandomColor() {
    let color = '#';

    const hexDigits = '0123456789abcdef';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexDigits.length);
        color += hexDigits[randomIndex];
    }

    return color;
}

startBtn.addEventListener('click', (e) => {
    // try to remove this if condition, and then press 'start' button twice and observe
    // check if there is no existing intervals
    if (!intervalId) {
        intervalId = setInterval(() => {
            console.log(getRandomColor());
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
    }
})

stopBtn.addEventListener('click', (e) => {
    clearInterval(intervalId);
    intervalId = null;
})

// Explaination:

// The behavior you're observing is likely due to the fact that when you click the "start" button twice, you are creating
// two separate intervals that are updating the background color independently. This happens because the setInterval function is
// being called each time the "start" button is clicked.

// Here's a breakdown of the code and the behavior:

// 1. Clicking the "start" button once:

// -> An interval is set up using setInterval that calls the getRandomColor function every 1000 milliseconds (1 second) and
// updates the background color of the document.body accordingly.
// -> The interval ID is stored in the variable intervalId.

// 2. Clicking the "start" button a second time:

// -> Another interval is set up independently of the first one, and a new interval ID is stored in the same variable intervalId.
// This effectively overwrites the previous interval ID.
// -> Now, there are two intervals running simultaneously, both updating the background color independently.

// 3. Clicking the "stop" button:

// -> The clearInterval function is called with the intervalId to stop the interval. However, this only stops one of the
// intervals (the most recently created one). The other interval is still running.
// -> If you remove the if condition, clicking the "start" button twice will create two independent intervals even faster, as there's no check to see if an interval is already running.

// To fix this behavior, you can add a check before creating a new interval to ensure that there is no existing interval.

// This way, if there's already an interval running (intervalId is not null), clicking the "start" button again won't create a new interval.
// It will only create a new interval if there isn't one currently running.
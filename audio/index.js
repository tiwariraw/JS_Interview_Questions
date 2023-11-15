const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const seekBar = document.getElementById('seek-bar');

let isDragging = false;

const audiObj = new Audio();
audiObj.src = './1.mp3'; // sets the audio src

playBtn.addEventListener('click', (e) => {
    if (audiObj.paused) {
        audiObj.play();
    }
});

pauseBtn.addEventListener('click', (e) => {
    audiObj.pause();
})

console.log(audiObj.played); // TimeRanges {length: 0}
console.log(audiObj.paused); // true
console.log(audiObj.src); //returns the audio src
console.log(audiObj.duration); // here duration is NaN, because the audio is not loaded yet. Use 'loadedmetadata' event or 'timeupdate' event
console.log(audiObj.currentTime); // 0
console.log(audiObj.muted); // false
console.log(audiObj.volume); // 1 


// 'timeupdate' event of audio object
// The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
audiObj.addEventListener('timeupdate', () => {
    console.log(audiObj.currentTime);
    // console.log(audiObj.duration);

    if (!isDragging) {
        const progressPercentage = parseFloat(audiObj.currentTime / audiObj.duration * 100);
        console.log(progressPercentage);
        seekBar.value = progressPercentage;
    }
});


// for smooth movement of cursor in seekbar

// The mouseup event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.
seekBar.addEventListener('mouseup', () => {
    isDragging = false;
})

// The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
seekBar.addEventListener('mousedown', () => {
    isDragging = true;
})

seekBar.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // console.log(e.offsetX); // offset in the X coordinate of the mouse pointer (a double floating point value)
        // console.log(seekBar.clientWidth); // 400px
        const percentage = (e.offsetX / seekBar.clientWidth) * 100;
        seekBar.value = percentage;
        audiObj.currentTime = percentage * audiObj.duration / 100;
    }
});

// 'loadedmetadata' event of audio object
audiObj.addEventListener('loadedmetadata', () => {
    console.log(audiObj.duration);
})

// 'change' event of input 
seekBar.addEventListener('change', (e) => {
    audiObj.currentTime = seekBar.value * audiObj.duration / 100;
})


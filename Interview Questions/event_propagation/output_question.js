// Event propagation in JavaScript

// Q6. Whenever a user clicks on button, the ecution should be:
// first, from handler should be called
// then, the button handler
// and then, the div handler

/*

const div = document.querySelector(".div");
const span = document.querySelector(".span");
const btn = document.querySelector(".btn");

div.addEventListener('click', () => {
    alert('div');
});

form.addEventListener('click', () => {
    alert('form');
});

btn.addEventListener('click', () => {
    alert('btn');
});

*/

// Solution

const div = document.querySelector(".div");
const span = document.querySelector(".span");
const btn = document.querySelector(".btn");

div.addEventListener('click', () => {
    alert('div');
});

form.addEventListener('click', () => {
    alert('form');
}, { capture: true });

btn.addEventListener('click', () => {
    alert('btn');
});

// Expl:
// As form is capturing the event, it goes from top to down i.e. first form handler
// is executed and then button handler. But btn doesn't have capture: true, so here
// it is event bubbling i.e. bottom to top (default) so after btn handler, div 
// handler will be executed.
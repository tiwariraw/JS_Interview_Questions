// Event Delegation

// It uses the concept of event bubbling i.e. an event propagates upwards in the
// DOM tree until it reaches the root element.

// Event delegation is used to add a single event handler to the parent element
// instead of having to register multiple event handlers to the child elements.

// The event delegation refers to the technique of levering event bubbling 
// to handle events at a higher level in the DOM than the element on which 
// the event originated.

// Benefits of event delegation

// 1. Less memory usage, better performance.
// 2. Less time required to set up event handlers on the page.

// Problem: Here we are registering 3 event listeners
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.target.innerText);
    })
})

// Solution: event delegation (only 1 event listener is registered)

const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.innerText);
    }
})


/* Another example of event delegation */

// html
/*
<ul class="products">
    <li class="mobile">Mobile</li>
    <li class="headphone">Headpone</li>
    <li class="laptop">Laptop</li>
    <li class="speaker">Speaker</li>
    <li class="iphone">iPhone</li>
    <li class="tripod">Tripod</li>
</ul>
*/

// const products = document.querySelector('.products');

// products.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         window.location.href = window.location.href + event.target.className;
//     }
// })


/* Another example of event delegation */

// html
/*
<form action="#" id="form">
        <input type="text" id="name" data-uppercase>
        <input type="text" id="pan">
        <input type="text" id="mobile">
    </form>
*/

// const form = document.getElementById('form');

// form.addEventListener('keyup', (event) => {
//     console.log(event);
//     if (event.target.dataset.uppercase !== undefined) {
//         event.target.value = event.target.value.toUpperCase();
//     }
// })
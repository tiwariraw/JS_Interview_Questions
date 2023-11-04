// Event Bubbling

// Event Bubbling is a concept in the DOM (Document Object Model). 
// It happens when an element receives an event, and that event bubbles 
// up (or you can say is transmitted or propagated) to its parent and 
// ancestor elements in the DOM tree until it gets to the root element.

// This is the default behavior of events on elements unless you stop 
// the propagation by using stopPropagation method of event object.

// In the below eg, if we click on p, the 'click' event is propagated upwards 
// p to div2 to div1 to body to html (root element). So, first the 'p' handler
// will be called, then div2 handler and then div1 handler will be called.

// When an event happens on an element, it first runs the handlers on it,
//  then on its parent, then all the way up on other ancestors.

// Note: All the events do not bubble up e.g. focus, blur, etc. There are very few events that don't bubble up.

// Ref:
// 1. https://www.freecodecamp.org/news/event-bubbling-in-javascript/
// 2. https://www.freecodecamp.org/news/manage-default-behavior-in-browser/
// 3. https://javascript.info/bubbling-and-capturing

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const p = document.getElementById('p');

div1.addEventListener('click', () => {
    alert('div1 is clicked');
});

div2.addEventListener('click', () => {
    alert('div2 is clicked');
});

p.addEventListener('click', () => {
    alert('p is clicked');
});


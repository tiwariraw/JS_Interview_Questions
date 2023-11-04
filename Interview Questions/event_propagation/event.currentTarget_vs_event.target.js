const div = document.getElementById('root');
const span = document.getElementById('span');
const btn = document.getElementById('para');

div.addEventListener('click', f1);
span.addEventListener('click', f1);
btn.addEventListener('click', f1);

function f1(event) {
    alert("currentTarget = " + event.currentTarget.tagName +
        ", target = " + event.target.tagName +
        ", this = " + this.tagName);
}

// A handler on a parent element can always get the details about where it
// actually happened.

// The most deeply nested element that caused the event is called a target
// element, accessible as event.target.

// Note the differences from this (=event.currentTarget):

// ➡️ event.target – is the “target” element that initiated the event, it doesn’t
// change through the bubbling process.

// ➡️ this – is the “current” element, the one that has a currently running handler
//  on it.


/* event.stopPropagation() vs event.stopImmediatePropagation() */
// If an element has multiple event handlers on a single event, then even if
// one of them stops the bubbling, the other ones still execute.

// In other words, event.stopPropagation() stops the move upwards, but on
// the current element all other handlers will run.

// To stop the bubbling and prevent handlers on the current element from running,
//  there’s a method event.stopImmediatePropagation(). After it no other
// handlers execute.
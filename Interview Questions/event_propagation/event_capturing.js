// Event capturing/trickling

// The event goes down to the element.
// It is exact oppposite of event bubbling.

// In the below eg, if we click on p, the 'click' event is propagated downwards 
// div1 to div2 to p. So, first the 'div1' handler
// will be called, then div2 handler and then the p handler will be called.

// For event caputing, we pass an object {capture: true} as 3rd argument to 
// addEventListener method.

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const p = document.getElementById('p');

div1.addEventListener('click', () => {
    alert('div1 is clicked');
}, { capture: true });

div2.addEventListener('click', () => {
    alert('div2 is clicked');
}, { capture: true });

p.addEventListener('click', () => {
    alert('p is clicked');
}, { capture: true });


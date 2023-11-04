//Q. Create a modal which closes by clicking on negative space (space outside the modal).

const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelector('.modal-btn');

btn.addEventListener('click', () => {
    toggleModal(true);
})

function toggleModal(state) {
    modalContainer.style.display = state ? 'flex' : "none";
}

// modalContainer has 100vw and 100vh
modalContainer.addEventListener('click', (event) => {
    // If we click on 'modal', modal (className) will be logged to the console.
    //  And if we click on outside of 'modal' but anywhere in 'modal-container',
    // modal-container(className) will be logged.

    // console.log(event.target.className); 
    
    if (event.target.className === 'modal-container') toggleModal(false);
})
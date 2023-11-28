const submitBtn = document.getElementById('submit');

function validate() {

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (email.value.trim() === '') {
        alert('No blank values allowed for email');
        email.style.border = '1px solid red';
        return false;
    } else if (password.value.trim() === '') {
        alert('No blank values allowed for password');
        password.style.border = '1px solid red';
        return false;
    } else if (password.value.trim().length < 8) {
        alert('password too short');
        password.style.border = '1px solid red';
        return false;
    } else {
        return true;
    }
}

// The submit event fires when a <form> is submitted.
document.querySelector('form').addEventListener('submit', (e) => {
    if (!validate()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});


/*
1. Telusko JS Playlist by Tanmay (#26, #27)
2. https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
3. https://stackoverflow.com/questions/16262797/html-form-action-and-onsubmit-issues
4. https://javascript.info/forms-submit
*/
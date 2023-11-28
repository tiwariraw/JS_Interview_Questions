const submitBtn = document.getElementById('submit');

function validate() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;

    /***** validate email *****/

    if (email !== '') {
        const regEx2 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

        if (regEx2.test(email)) {
            const label1 = document.getElementById('label1')
            label1.innerHTML = 'Valid'
            label1.style.visibility = 'visible';
            label1.style.color = 'green';

            setTimeout(() => {
                label1.style.visibility = 'hidden';
            }, 3000);

        } else {
            label1.innerHTML = 'Invalid'
            label1.style.visibility = 'visible';
            label1.style.color = 'red';

            setTimeout(() => {
                label1.style.visibility = 'hidden';
            }, 3000);

        }
    }

    /***** validate password *****/

    if (password !== '') {
        const regEx3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

        if (regEx3.test(password)) {
            const label2 = document.getElementById('label2')
            label2.innerHTML = 'Valid'
            label2.style.visibility = 'visible';
            label2.style.color = 'green';

            setTimeout(() => {
                label2.style.visibility = 'hidden';
            }, 3000);

        } else {
            label2.innerHTML = 'Invalid'
            label2.style.visibility = 'visible';
            label2.style.color = 'red';

            setTimeout(() => {
                label2.style.visibility = 'hidden';
            }, 3000);
        }
    }

    /***** validate mobile number *****/

    if (mobile !== '') {
        const regEx1 = /^[6-9]\d{9}$/;
        // const regEx1 = /^[6-9][0-9]{9}$/; 

        if (regEx1.test(mobile)) {
            const label3 = document.getElementById('label3')
            label3.innerHTML = 'Valid'
            label3.style.visibility = 'visible';
            label3.style.color = 'green';

            setTimeout(() => {
                label3.style.visibility = 'hidden';
            }, 3000);

        } else {
            label3.innerHTML = 'Invalid'
            label3.style.visibility = 'visible';
            label3.style.color = 'red';

            setTimeout(() => {
                label3.style.visibility = 'hidden';
            }, 3000);
        }
    }

}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    validate();
})
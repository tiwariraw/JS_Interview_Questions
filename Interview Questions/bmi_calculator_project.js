/*
<h1>BMI Calculator</h1>
<input type="text" id="weight" placeholder="Weight(in kg)">
<input type="text" id="height" placeholder="Height(in m)">

<button class="btn">Calculate</button>

<div class="result"></div>
<div class="outcome"></div>

<div class="weight-guide">
    <h3>Weight Guide</h3>
    <p>Under Weight: Less than 18.6</p>
    <p>Normal: 18.6 and 24.9</p>
    <p>Over Weight: Greater than 24.9</p>
</div>
*/ 

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const outcome = document.querySelector('.outcome');

function calculateBMI(w, h) {
    if (w === '' || w < 0 || isNaN(w)) {
        result.innerHTML = 'Enter a valid weight';
    }
    else if (h === '' || h < 0 || isNaN(h)) {
        result.innerHTML = 'Enter a valid height';
    } else {
        const bmi = (w / (h * h)).toFixed(2);
        result.innerHTML = bmi;
    }

    if (bmi < 18.6) {
        outcome.innerHTML = 'Under weight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
        outcome.innerHTML = 'Normal';
    } else {
        outcome.innerHTML = 'Over weight';
    }
}

btn.addEventListener('click', (event) => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    calculateBMI(weight, height);
})
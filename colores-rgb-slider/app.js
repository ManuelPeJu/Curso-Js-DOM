const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

console.log(redInput)

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;

redText.innerText = red
greenText.innerText = green
blueText.innerText = blue

const updateColor = (red, green, blue) => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = rgbColor;
}

// Update Red

redInput.addEventListener('change', (e) => {
    red = e.target.value
    redText.innerText = red;
    updateColor(red, green, blue);
})

// Update Green

greenInput.addEventListener('change', (e) => {
    green = e.target.value
    greenText.innerText = green;
    updateColor(red, green, blue);
})

// Update Blue

blueInput.addEventListener('change', (e) => {
    blue = e.target.value
    blueText.innerText = blue;
    updateColor(red, green, blue);
})
// Select dom elements

const button = document.querySelector('button');
const color = document.getElementById('color');


const hexColorGenerator = () => {
    let digits = '0123456789ABCDEF';
    let hexColor = '#';

    for (let i = 0; i < 6 ; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        hexColor += digits[randomIndex];
    }

    return hexColor;

}

button.addEventListener('click', (e) => {
    let randomColor = hexColorGenerator();

    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
})
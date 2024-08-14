// //document.getElementById();
// const container = document.getElementById('container');
// // console.log(container);

// const title = document.getElementById('title');
// // console.log(title);

// //document.getElementByClassName();
// const toppings = document.getElementsByClassName('topping');
// // console.log(toppings);

// // document.getElementByTagName();
// const myToppings = document.getElementsByTagName('li')
// // console.log(myToppings);

// // document.querySelector(); && document.querySelectorAll();

// const aceituna = document.querySelector('#aceituna');
// console.log(aceituna);

// const primerToppingNaranja = document.querySelector('.topping.orange-bg');
// console.log(primerToppingNaranja);

// const primerToppingNaranja2 = document.querySelector('ul li.orange-bg');
// console.log(primerToppingNaranja2);

// const toppingsNaranjas = document.querySelectorAll('.orange-bg');
// console.log(toppingsNaranjas);


// //asignar estilos con JS
// const primerTopping = document.querySelector('.topping');

// primerTopping.style.backgroundColor = 'blue'


// Atributos
// const enlace = document.getElementsByTagName('a');
// console.log(enlace[0].getAttribute('href'));
// console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org'));

// Class

// const primerTopping = document.querySelector('.topping');

// primerTopping.classList.add('texto-verde');
// primerTopping.classList.remove('topping');
// primerTopping.classList.contains('topping');


// console.log(primerTopping.classList)
// console.log(primerTopping.classList)
// console.log(primerTopping.classList)


// Crear elementos desde 0
const listaDeToppings = document.getElementById('toppings-list');

const toppingNuevo = document.createElement('li');

toppingNuevo.classList.add('topping', 'brown-bg')

toppingNuevo.innerText = 'Queso Extra';

listaDeToppings.append(toppingNuevo);


// Manejo de Eventos

const toppings = document.getElementsByClassName('topping')


const mostrarClick = (e) => {
    console.log(e.target.innerText)
}
for (const topping of toppings) {
    topping.addEventListener('click', mostrarClick);
} 

// Arrow function form
// for (const topping of toppings) {
//     topping.addEventListener('click', (e) => {
//         console.log(e.target.innerText)
//     });
// } 


aceitunas.addEventListener('click', mostrarClick);


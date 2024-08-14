let buttonEl = document.getElementById('change-quote-button');
let quoteEl = document.getElementById('quote');
let authorEl = document.getElementById('author');



const integerRandomGenerator = (min, max) => {
    //not including max in the possible values
    return Math.floor(Math.random() * (max - min) + min);
}


const changeQuote = () => { 
    let randomIndex = integerRandomGenerator(0, Quotes.length)
    quoteEl.innerText = `"${Quotes[randomIndex].texto}"`;
    authorEl.innerText = Quotes[randomIndex].autor;
}

changeQuote();


buttonEl.addEventListener('click', changeQuote)
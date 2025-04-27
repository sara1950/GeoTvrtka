const NameEl = document.getElementById("name");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const letterEl = document.getElementById("letter");

const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const Letters = ['Geodet','Geo', 'Mjernik', 'Metar', 'Gauss', 'Pitagora', 'GPS', 'Data', 'CAD', 'Geodetski','Libela', 'Nivelir', 'Reper', 'Kota','Linija', 'Trokut', 'Šestar','Kut', 'Mapa','Milimetar', 'Atlas','Radijus','Map','Mapper','GIS','Global'];

const numbers = "0123456789";
const symbols = "Δß-|@#∞$&+α";

function getLetters() {
    return Letters[Math.floor(Math.random() * Letters.length)];
}


function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generate() {

   
    const len = lenEl.value;

    let word = "";

    if (letterEl.checked) {
        word += getLetters();
    }

 

    if (numberEl.checked) {
        word += getNumber();
    }

    if (symbolEl.checked) {
        word += getSymbol();
    }

    for (let i = word.length; i < len; i++) {
        const x = generateX();
        word += x;
    }

    NameEl.innerText = word;
}

function generateX() {
    const xs = [];
    if (letterEl.checked) {
        xs.push(getLetters());
    }

   

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generate);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const word = NameEl.innerText;

    if (!word) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
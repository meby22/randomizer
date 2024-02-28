let minQ = document.querySelector('#min');
let maxQ = document.querySelector('#max');
let btn = document.querySelector('button');
let container = document.querySelector('#container');

function randomNumber(min, max) {
    min = Number(minQ.value);
    max = Number(maxQ.value);
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    container.innerHTML = number;
    return number;
}

btn.addEventListener('click', randomNumber);
'use strict';

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
console.log(btns[0].classList.add('journal'));
console.log(btns[0].classList.item(2));
console.log(btns[0].classList.remove('journal'));
console.log(btns[0].classList.item(2));

console.log(btns[2].classList.add('red'));
console.log(btns[4].classList.add('red'));
'use strict';



const num = 55;

// if (num < 50){
//     console.log('error: мало')
// } else if (num > 100) {
//     console.log('error: много')
// } else {
//     console.log('complete!');
// }

// (num === 50) ? console.log('complete!') : console.log('error!');

// switch(num){
//     case 50:
//         console.log('complete!')
//         break;
//     case 100:
//         console.log('error: слишком много!');
//         break;
//     default:
//         console.log('error: неизвестная ошибка.');
//         break;
// }


// // let abcd = 10;

// // // // while(abcd < 15){
// // // //     console.log(abcd);
// // // //     abcd++;
// // // // }

// // // do{
// // //     console.log('abcd');
// // //     abcd++;
// // // }
// // // while(abcd < 15)

// // // for(let i = 1; i <= 5; i++){

// // //     if(i === 2){
// // //         // break;
// // //         continue;
// // //     }
// // //     console.log(i)
// // // }

// // let numberOfFilms;

// // refactoring

// const personalMovieDB = {
//     count: [],
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//             numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//         personalMovieDB.count = numberOfFilms;
//     },
//     writeYourGenres: function (){
//         for(let i = 1; i <= 3; i++){
//             let genre = prompt(`Ваш любимый жанр номер ${i}`);
           
//             if(genre === '' || genre === null || genre === undefined){
//                 console.log('Введите корректные данные');
//                 i--;
//             }else{
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach( (item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     },
//     rememberMyFilms: function (){
//         for(let i = 0; i < 2; i++){
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if(a != null && b != null && a != '' && b != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 console.log('complete!')
//             }else{
//                 console.log('error')
//                 i--;
//             }

//         }
//     },
//     detectPersonalLvl: function (){
//         if(personalMovieDB.count < 10){
//             console.log('malo')
//         } else if(personalMovieDB.count < 30){
//             console.log('normal')
//         } else if(personalMovieDB.count < 50){
//             console.log('great!')
//         }
//     },
//     showMyDB: function (){
//         if(personalMovieDB.privat == false){
//             console.log(personalMovieDB)
//         }
//     },
//     toggleVisibleMyDB: function(){
//         if (personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         }else{
//             personalMovieDB.privat = true;
//         }
//     }
// }

// // let a = 10;
// console.log(a);

// let b = 45;

// function showFirstMessage(text){
//     console.log(text);
//     a = 233;
//     console.log(b);
// }

// showFirstMessage('welcome home goodhunter');
// console.log(a);

// // function calc(a,b){
// //     return a + b;
// // }

// // console.log(calc(42,5));

// function ret(){
//     let num = 40;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(username){
//     let a = 44;
//     console.log(username + a)
// };

// logger('goodhunter');

// const calc = a => --a;

// console.log(calc(0));

// // const str ='text';

// // console.log(str.length);
// // console.log(str.toUpperCase());

// const fruit = 'some fruit';
// // // console.log(fruit.indexOf('s'));

// // // const logg = 'welcome home goodhunter';
// // // console.log(logg.slice(5, 10));

// // // const numb = "15.9px";
// // // console.log(parseInt(numb))

// // function first(){
// //     // Do something
// //     setTimeout(function(){
// //         console.log(1);
// //     }, 500);
// // }

// // function second(){
// //     console.log(2);
// // }

// // first();
// // second();

// // function learnJS(lang, callback){
// //     console.log(`Я учу ${lang}`);
// //     callback();
// // }

// // function done(){
// //     console.log('Я прошел этот урок.');
// // }

// // learnJS('JavaScript', done);

// const test = {
//     name: 'test',
//     width: '1080px',
//     height: '720px',
//     colors:{
//         border: 'black',
//         bg:'green'
//     },
//     makeTest: function(){
//         console.log('up!')
//     }
// };

// test.makeTest();

// console.log(Object.keys(test).length);


// // for( let key in test){
// //     if(typeof(test[key]) === 'object'){
// //         for(let i in test[key]){
// //             console.log(`Свойство ${i} имеет значение ${test[key][i]}`);
// //         }
// //     }else{
// //         console.log(`Свойство ${key} имеет значение ${test[key]}`);
// //     }
// // }

// const {border, bg} = test.colors;
// console.log(border);

// const array = [9, 8, 7, 6, 5];

// array.sort(compareNumb);
// console.log(array);

// function compareNumb(a, b){
//     return a - b;
// }

// array.forEach(function(item, i, array){
//     console.log(`${i}: ${item} внутри массива ${array}`)
// })

// array.pop();
// array.push(3,3)

// console.log(array);

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// for(let value of array){
//     console.log(value)
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// Передача по ссылке или по значению
// Spread оператор
// shallow copy project

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 0
// };

// let copy = obj; // Передача по ссылке

// console.log(copy);
// console.log(obj);

// function myCopy(mainObj){
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = myCopy(numbers); // Поверхностная копия объекта

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 10, 
//     e: 0,
//     duble: {
//         a: 0,
//         b: 0
//     }
// }

// const clone = (Object.assign({}, add)); // Toje poverhnostnaya copy

// clone.duble.b = 299;


// // console.log(clone);
// // console.log(add)

// const temple = ['a', 'b', 12];
// const newTemple =   temple.slice();

// newTemple[1] = 'welcome home goodhunter';

// console.log(newTemple);
// console.log(temple);

// const users = ['emory', 'nepenthe', 'finist'],
//       programs = ['vscode', 'figma', 'photoshop'],
//       test = [...users, ...programs, 'UTF-8', 'JavaScript'];

// console.log(test);

// function testFunc(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const newNumb = ['dsys',-2,3,4,5];

// testFunc(...newNumb);

// const testArray = ['a', 'b'];

// const newArray = [...testArray];

// const q = {
//     one: 1,
//     two: 2,
//     three:{
//         one: 3.1,
//         two: 3.2
//     }
// }

// const newObj = {...q}

// newObj.three.one = 3;

// console.log(newObj);
// console.log(q);

// // Основы ооп

// let str = 'some';
// let objStr = new String(str);

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100
// };

// const rarog = {
//     health: 700
// };

// rarog.__proto__ = soldier; // anew

// Object.setPrototypeOf(rarog, soldier); // new

// const john = Object.create(soldier); // new

// let x = 5; alert(x++); // return 5

// [ ] + false - null + true;

// console.log([ ] + false - null + true); // NaN

// let y = 1; let x = y = 2; alert(x); // 2

// console.log([ ] + 1 + 2); // 12

// alert("1"[0]); // 1

// console.log( 2 && 1 && null && 0 && undefined); // запинается на null

// console.log(!!(1 && 2) == (1 && 2));

// alert(null || 2 && 3 || 4);

// const a = [1, 2, 3], b = [1, 2, 3];

// console.log('Infinity'); 
// console.log(+'Infinity');

// console.log("Ёжик" > "Яблоко");

// // console.log(0 || ' ' || 2 || undefined || true || false)

// const box = document.getElementById('box');
// // console.log(box);

// const btns = document.getElementsByTagName('button');
// // console.log(btns);

// const circles = document.getElementsByClassName('circle');
// // console.log(circles);





// const wrapper = document.querySelector('.wrapper');

// const oneHeart = wrapper.querySelector('.heart');
// // console.log(oneHeart)

// const hearts = wrapper.querySelectorAll('.heart');
// // console.log(hearts);
// hearts.forEach(item =>{
//     // console.log(item);
// });

// console.dir(box)

// box.style.backgroundColor = 'pink';
// box.style.width = '500px';

// btns[1].style.backgroundColor = 'yellow';
// btns[0].style.borderRadius = '100%';

// for(let i = 0; i < circles.length; i++){
//     circles[i].style.backgroundColor = 'brown';
// }

// hearts.forEach(item =>{
//     item.style.cssText = 'background-color: #3CAA3C; border-radius: 50%';
// });

// const div = document.createElement('div');

// div.classList.add('black');

// // wrapper.prepend(div);
// hearts[0].after(div);
// // wrapper.insertBefore(div, hearts[1]) // устарел
// // wrapper.appendChild(div); // устарел

// circles[1].remove();
// // wrapper.removeChild(hearts[1]); // устарел

// hearts[1].replaceWith(circles[0]);
// // wrapper.replaceChild(div, hearts[2]); // устарел

// div.innerHTML = "<h3>welcome home</h3>" // любая хтмл структура

// div.textContent = 'also sprach' // только тхт

// div.insertAdjacentHTML("afterend", '<h1>Zarathustra</h1>')


// const movieDB = {
//     movies: [
//         "Легенда",
//         "Бронсон",
//         "Седьмая Печать",
//         "Симеон Столпник",
//         "Одержимость",
//         "Рокко и его братья"
//     ]
// }

// const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list');

// // adv.forEach( item =>{
// //     item.remove();
// // })

// // const div = document.createElement('div');
// // div.innerHTML = "<h3>ДРАМА</h3>";
// // div.classList.add('promo__genre');

// // genre.replaceWith(div);

// genre.textContent = 'драма';

// // console.log(poster);
// poster.style.backgroundImage = 'url("img/bg.jpg")';

// movieList.innerHTML = "";

// // movieDB.movies.sort();
// // movieDB.movies.forEach( (film, i) => {
// //     movieList.innerHTML += `
// //     <li class="promo__interactive-item"> ${++i + '. ' + film} 
// //         <div class="delete"></div>
// //     </li>
// //     `
// // });

// // const btn = document.querySelector('#btn'),
// //     overlay = document.querySelector('.overlay'),
// //     links = document.querySelectorAll('a');

// // btn.onclick = function() {
// //     alert('click')
// // };



// // btn.addEventListener('click', (e) =>{
// //     e.target.remove()
// // });

// let i = 0;

// const printEvent = (e) =>{
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if(i == 2){
//     //     btn.removeEventListener('click', printEvent);
//     // }
// };

// btn.addEventListener('click', printEvent);
// overlay.addEventListener('click', printEvent);

// // link.addEventListener('click', function(e){
// //     e.preventDefault();

// //     console.log(e.target);
// // })

// links.forEach(link => {
//     link.addEventListener('click', function(e){
//         e.preventDefault();
    
//         console.log(e.target);
//     }, {once: true})
// })

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);

// // console.log(document.querySelector('.add').parentNode);
// console.log(document.querySelector('.add').parentElement);

// // console.log(document.querySelector('[data-current="3"]').nextElementSibling)

// for(let node of document.body.childNodes){
//     if(node.nodeName =='#text'){
//         continue;
//     }
    
//     console.log(node)
// }

// trainHard

document.addEventListener('DOMContentLoaded', () =>{    

    const movieDB = {
            movies: [
                "Легенда",
                "Бронсон",
                "Седьмая Печать",
                "Симеон Столпник",
                "Одержимость",
                "Рокко и его братья"
            ]
        }
        
        const adv = document.querySelectorAll('.promo__adv img'),
            poster = document.querySelector('.promo__bg'),
            genre = poster.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox');

        addForm.addEventListener('submit', (event) =>{
            event.preventDefault();

            let newFilm = addInput.value;
            const favorite  = checkbox.checked;

            if (newFilm) {

                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
    
                if (favorite) {
                    console.log("Добавляем любимый фильм");
                }
    
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
        
                createMovieList(movieDB.movies, movieList);
            }
    
            event.target.reset();
    
        });

        const deleteAdv = (arr) => {
            arr.forEach( item =>{
                item.remove();
            })
        };
        
        const makeChanges = () => {        
            genre.textContent = 'драма';

            poster.style.backgroundImage = 'url("img/bg.jpg")'
        };


        const sortArr = (arr) => {
            arr.sort();
        };

            function createMovieList(films, parent) {
                parent.innerHTML = "";
                sortArr(films);

                films.forEach( (film, i) => {
                    parent.innerHTML += `
                    <li class="promo__interactive-item"> ${i+1} ${film} 
                        <div class="delete"></div>
                    </li>
                    `;
                });
            

            
        
        
        
        

        // const div = document.createElement('div');
        // div.innerHTML = "<h3>ДРАМА</h3>";
        // div.classList.add('promo__genre');
        
       

        
        
        // console.log(poster);
        // poster.style.backgroundImage = 'url("img/bg.jpg")';
        
        // movieList.innerHTML = "";
    
        
        // const btn = document.querySelector('#btn'),
        //     overlay = document.querySelector('.overlay'),
        //     links = document.querySelectorAll('a');
        
        // btn.onclick = function() {
        //     alert('click')
        // };        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

        deleteAdv(adv);
        makeChanges();
        createMovieList(movieDB.movies, movieList);
});




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

// // // while(abcd < 15){
// // //     console.log(abcd);
// // //     abcd++;
// // // }

// // do{
// //     console.log('abcd');
// //     abcd++;
// // }
// // while(abcd < 15)

// // for(let i = 1; i <= 5; i++){

// //     if(i === 2){
// //         // break;
// //         continue;
// //     }
// //     console.log(i)
// // }

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start()

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // console.log(personalMovieDB);

// function writeYourGenres(){
//     for(let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш любимый жанр номер ${i}`);
//         while(genre == '' || genre == null){
//             const genre = prompt(`Ваш любимый жанр номер ${i}`);
//         }
//         personalMovieDB.genres[i - 1] = genre;
//     }


// }

// writeYourGenres();

// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if(a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('complete!')
//         }else{
//             console.log('error')
//             i--;
//         }
    
//     }
// }

// function detectPersonalLvl(){
//     if(personalMovieDB.count < 10){
//         console.log('malo')
//     } else if(personalMovieDB.count < 30){
//         console.log('normal')
//     } else if(personalMovieDB.count < 50){
//         console.log('great!')
//     }
// }

// function showMyDB(){
//     if(personalMovieDB.privat == false){
//         console.log(personalMovieDB)
//     }
// }

// showMyDB();



// let a = 10;
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

const array = [9, 8, 7, 6, 5];

array.sort(compareNumb);
console.log(array);

function compareNumb(a, b){
    return a - b;
}

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
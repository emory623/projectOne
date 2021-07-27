'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

const num = 55;

// if (num < 50){
//     console.log('error: мало')
// } else if (num > 100) {
//     console.log('error: много')
// } else {
//     console.log('complete!');
// }

// (num === 50) ? console.log('complete!') : console.log('error!');

switch(num){
    case 50:
        console.log('complete!')
        break;
    case 100:
        console.log('error: слишком много!');
        break;
    default:
        console.log('error: неизвестная ошибка.');
        break;
}

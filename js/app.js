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


// let abcd = 10;

// // while(abcd < 15){
// //     console.log(abcd);
// //     abcd++;
// // }

// do{
//     console.log('abcd');
//     abcd++;
// }
// while(abcd < 15)

// for(let i = 1; i <= 5; i++){

//     if(i === 2){
//         // break;
//         continue;
//     }
//     console.log(i)
// }

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('complete!')
    }else{
        console.log('error')
        i--;
    }

}

if(personalMovieDB.count < 10){
    console.log('malo')
} else if(personalMovieDB.count < 30){
    console.log('normal')
} else if(personalMovieDB.count < 50){
    console.log('great!')
}


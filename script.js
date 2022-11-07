/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на :
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

    //"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// const num = 50;

// if (num < 49){
//     console.log('Eror');
// } else if (num > 100){
//     console.log('Много');
// }else {
//     console.log('Ok');
// }

// тернарный оператор
// const num = 52;

// (num === 50) ? console.log('Ok') : console.log('Eror');

/////////////////////////////

//Свич работает на строгое сравнение

// const num = 50;

// switch (num) {
//     case 49:
//        console.log('Неверно');
//        break;
//     case 100:
//         console.log('Много');
//         break;
//     case 50:
//         console.log('В точку');
//         break;
//     default :
//         console.log('Не в этот раз');
//         break;
// }


/////////////////////////////////

// let num = 50;

// // while (num <= 55){
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num <65);

for (let i = 1; i < 12; i++ ) {
    if (i === 6){
        // break;
        continue;     //6 перепрыгнул
    }

    console.log (i);
}
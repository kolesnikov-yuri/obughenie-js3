/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания

    // "use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('eror');
        i--;
    }
                
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else {
            console.log('eror');
            i--;
        }
                    
    }  
}

rememberMyFilms();

//////////////способ 1

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genres; 
    }
}

writeYourGenres();
    


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

// for (let i = 1; i < 12; i++ ) {
//     if (i === 6){
//         // break;
//         continue;     //6 перепрыгнул
//     }

//     console.log (i);
// }

const num = 12.49;
console.log(Math.round(num));
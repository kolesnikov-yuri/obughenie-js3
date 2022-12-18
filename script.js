// Содержание:

// 13 Условия                                       50
// 14 ЦИКЛЫ                                         133
// 16 Функции                                       191
// 19 Callback- функиции                            300
// функция которая выполнится когда другая закончит свое выполнение
// Объекты, деструктуризация объектов               352
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object





////

































///////////////////////////////////
// 13 Условия

// if (4 == 9) {
//     console.log('Ok!');   //> ничего не произойдет
// }
// //-----------------------------
// if (4 == 4) {
//     console.log('Ok!');   //> Ok!
// }
// //-----------------------------
// if (4 == 9) {
//     console.log('Ok!');   
// } else {
//     console.log('Error');  //> Error
// }
// //-----------------------------
// if (1) {                       // всегда правда!
//     console.log('Ok!');   
// } else {
//     console.log('Error');  //> Ok!
// }
//-----------------------------
// const num = 50;

// if (num < 49) {
//     console.log('Мало');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Норма');    //>  Норма
// }
//-----------------------------
//Второй способ         ТЕРНАРНЫЙ ОПЕРАТОР

// const num = 50;

// (num === 50) ? console.log('Ok!') : console.log('Error');   //> Ok!
// //Используется 3 АРГУМЕНТА
// //-----------------------------
// (4 + 4);                  бинарный ОПЕРАТОР

// +'4';                       унарный  ОПЕРАТОР
//-----------------------------

//SWITCH    Переводится ПЕРЕКЛЮЧАТЕЛЬ
//CASE      переводится дело, корпус, пример, случай, обстоятельство

// const num = 50;

// switch (num) {        //строгое сравнение
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку');        //> В точку
//         break;
//     default:
//         console.log('Не в это раз');
//         break;
// }
//-----------------------------
// const num = 50;       //  со строками работает также

// switch (num) {        //строгое сравнение
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 51:
//         console.log('В точку');        
//         break;
//     default:
//         console.log('Не в это раз');     //>   Не в это раз 
//         break;
// }
//-----------------------------
////////////////////////////////////////////////////

//14 ЦИКЛЫ

// Есть три способа

// Первый способ  while - ПОКА

// let num = 50;

// while (num <= 55) {
//     console.log(num);       //> 50, 51, 52, 53, 54, 55
//     num++;
// }
//-----------------------------

//Второй способ  do - СДЕЛАТЬ

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);              //>   50, 51, 52, 53, 54
//-----------------------------

//Третий способ   for - ДЛЯ

// for (let i = 1; i < 8; i++) {
//     console.log(i);                 //>  1, 2, 3, 4, 5, 6, 7, 
// }
//-----------------------------

// let num = 50;

// for (let i = 1; i < 5; i++) {
//     console.log(num);                 //>   50, 51, 52, 53   !!!!!!!!
//     num++;
// }
//-----------------------------

// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);                       //>  1, 2, 3, 4   
// }
// //-----------------------------

// for (let i = 1; i < 8; i++) {
//     if (i === 5) {
//         // break;
//         continue;
//     }
//     console.log(i);                       //>  1, 2, 3, 4, 6, 7    пять пропущено
// }
// -----------------------------
//////////////////////////////////////////////////

// Функции

// function showFirstMessage () {              //название начинается с глагола
//     console.log("Hello World!");
// }

// showFirstMessage();                    //не забываем запустить, обьявить
// -----------------------------

//Бывают анонимные функции, они вызываются один раз и к ним нельзя обратится

// -----------------------------

// function showFirstMessage (text) {    //аргументов может быть много (text, arg, num, fwef)          
//     console.log(text);
// }

// showFirstMessage("Hello World!");  
// -----------------------------

// function showFirstMessage (text) {            
//     console.log(text);                      //> "Hello World!"
//     let num = 20;                           //локальная переменная существует только внутри функции
// }

// showFirstMessage("Hello World!"); 
// console.log(num);                             // Ошибка
// -----------------------------

// let num = 20;                                   //глобальная переменная

// function showFirstMessage (text) {            
//     console.log(text);                      //> "Hello World!"
//     num = 10;                               //функция влияет на глобальную переменную
// }

// showFirstMessage("Hello World!"); 
// console.log(num);                             //> 10
// -----------------------------

// Замыкание функции

// let num = 20;                                   //глобальная переменная

// function showFirstMessage (text) {            
//     console.log(text);                       //> "Hello World!"
//     let num = 10;
//     console.log(num);                       //> 10
// }

// showFirstMessage("Hello World!"); 
// console.log(num);                             //> 20
// -----------------------------

// function calc (a, b) {
//     return (a + b);                           //ВЕРНУТЬ после него ничего не задаем(Unreachable)
// }

// console.log(calc(4, 3));                   //> 7
// console.log(calc(5, 6));                   //> 11
// console.log(calc(10, 6));                   //> 16
// -----------------------------

// function ret() {
//     let num = 50;

//     //

//     return num;          // RETURN возвращает на ружу значение локальной переменной
// }

// const anotherNum = ret();
// console.log(anotherNum);                   //> 50
// -----------------------------


//  ТРИ ВИДА ФУНКЦИЙ

//  1 FUNCTION DECLARATION   Декларация    // как переменная var существует сразу

// console.log(calc(4, 3));                   //> 7
// console.log(calc(5, 6));                   //> 11
// console.log(calc(10, 6));                  //> 16

// function calc (a, b) {
//     return (a + b);                           
// }
// -----------------------------

//  2 FUNCTION EXPRESSION   Выражение    // можно вызвать после обьявления только

// const logger = function() {
//     console.log("Hello");
// };                                // Обязательно ;

// logger();                    //> Hello
// -----------------------------

//  3 СТРЕЛОЧНАЯ ФУНКЦИЯ

// const calc = (a, b) => a + b;

// console.log(calc(3, 7));

///////////////////////////////////////////////////////




//  19 Callback- функция которая выполнится когда другая закончит свое выполнение

// function first() {
//     //какоето долгое действие
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();                                    //> 2, 1  
// second();        // если функции идут одна за другой, не значит что они запускаются по порядку 
// -----------------------------

// function learn(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learn('JavaScript', function() {
//     console.log('Я прошел этот урок');       //> Я учу: JavaScript, Я прошел этот урок
// });
// -----------------------------

// function learn(lang, callback) {
//     console.log(`Я учу: ${lang}`);               // примечание, done работает без ()
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learn('JavaScript', done);                        //> Я учу: JavaScript, Я прошел этот урок
// -----------------------------

// function done() {                               //  также работает перевернутой
//     console.log('Я прошел этот урок');
// }

// function learn(lang, callback) {
//     console.log(`Я учу: ${lang}`);             // примечание, done работает без ()
//     callback();
// }

// learn('JavaScript', done);                        //> Я учу: JavaScript, Я прошел этот урок
// -----------------------------
//////////////////////////////////////////////////////////////////////

// Объекты, деструктуризация объектов

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options['colors']['bg']); //> red

// console.log(options.name);    //>  test

// delete options.name;       // name отсутствует (стерт)

// console.log(options);      //{ width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }
// -----------------------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,                               // внимание colors имеет значение [object Object]
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }                                            //>Свойств name имеет значение test
// };                                               //>Свойств width имеет значение 1024
//  //                                              //>Свойств height имеет значение 1024
// for (let key in options) {                       //>Свойств colors имеет значение [object Object]
//     console.log(`Свойств ${key} имеет значение ${options[key]}`);
// }

// ВНИМАНИЕ    for (let key in options)    ЗАПОНИТЬ!
// -----------------------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,                               // внимание colors имеет значение [object Object]
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }                                            //>Свойств name имеет значение test
// };                                               //>Свойств width имеет значение 1024
//  //                                              //>Свойств height имеет значение 1024
// for (let key in options) {                       //>Свойств border имеет значение black
//     if (typeof(options[key]) === 'object') {     //>Свойств bg имеет значение red
//         for (let i in options[key]) {
//             console.log(`Свойств ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//             console.log(`Свойств ${key} имеет значение ${options[key]}`);
//     }    
// }
// -----------------------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,                               
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }                                            
// };                                               
 
// let counter = 0;

// for (let key in options) {                       
//     if (typeof(options[key]) === 'object') {     
//         for (let i in options[key]) {
//             console.log(`Свойств ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//             console.log(`Свойств ${key} имеет значение ${options[key]}`);
//             counter++;
//     }    
// }

// console.log(counter);                //>  5   (колличеств своиств посчитали)
// -----------------------------

//  Перечислить и посчитать колличество ключей

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,                               
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }                                            
// };  

// console.log(Object.keys(options));        //>  [ 'name', 'width', 'height', 'colors' ]

// console.log(Object.keys(options).length); //>  4
// -----------------------------

//  Создать встроенный тест

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,                               
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }                                           
// };  

// options.makeTest();          //>  Test
// -----------------------------

//  Диструктуризация объекта

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,                               
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }                                            
// };

// const {border, bg} = options.colors;

// console.log(border);                   //> black
// console.log(bg);                       //> red
// -----------------------------
/////////////////////////////////////////////////////////////////




















const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('eror');
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genres == '' || genres == null) {
                console.log('некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любиьый жанр ${i + 1} - это ${item}`);
        });
    }

};



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('eror');
        i--;
    }

}





//////////////способ 1

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}















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

// const num = 12.49;
// console.log(Math.round(num));


//////////////////////////////
// Object ur 020

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// options.makeTest();
// console.log(Object.keys(options).length);
// // диструктуризация
// const {border, bg} = options.colors;   
// console.log(border);

// delete (options.name);

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ${key} имеет значение ${options[key]}');
// }

// обьект
const option = {
    name: 'test',
    width: 1240,
    height: 1240,
    colors: {
        bg: 'black',
        border: 'red'
    }
};
// console.log(option.colors.bg);
for (let key in option) {
    if (typeof (option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
    }

}





// //////////////////
//  const MY_VALUE = 10;

//  function add (num1, num2) {
//     return num1 + num2;
// }



// console.log(add(MY_VALUE, 5));

///////////////
// const WORKING_HOURS = 8;

// function dayRate(ratePerHour) {
//     return ratePerHour * WORKING_HOURS;
// }
// console.log(dayRate(89));

// function daysInBudget(budget, ratePerHour) {
//     return Math.floor(budget / (ratePerHour * WORKING_HOURS));
// }

// console.log(daysInBudget(20000, 89));



// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//     return function() {
//         let numberMonths = Math.floor(numDays / DAYS_MONTH);
//         // return function() {
//         //     let daysDiscount = numberMonths * DAYS_MONTH;
//         // };

//     };

// }
// console.log(priceWithMonthlyDiscount(89, 230, 0.42));
// console.log(numberMonths);

// const WORKING_HOURS = 8;

// function dayRate(ratePerHour) {
//     return ratePerHour * WORKING_HOURS;
// }
// dayRate(89);




// const DAYS_PN = dayRate(89);
// const DAYS_MONTH = 22;
// // let numDays = 230;
// function balanceWithoutDiscount(ratePerHour, numDays, discount) {

//     return DAYS_MONTH + DAYS_PN;
// }
// console.log(balanceWithoutDiscount(89, 230, 0.42));

/////////////////////////

// const WORKING_HOURS = 8;
// function dayRate(ratePerHour) {
//     return ratePerHour * WORKING_HOURS;
// }
// dayRate(89);
// console.log(dayRate(89));

// function daysInBudget(budget, ratePerHour) {
//     return Math.floor(budget / (ratePerHour * WORKING_HOURS));
// }
// daysInBudget(20000, 89);
// console.log(daysInBudget(20000, 89));

// const DAYS_MONTH = 22;
// const WORKING_HOURS = 8;

// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

//     let aaa = Math.floor(numDays / DAYS_MONTH);
//     let bbb = aaa * WORKING_HOURS * ratePerHour * DAYS_MONTH;
//     let ccc = Math.floor(bbb * discount);
//     let ddd = numDays % DAYS_MONTH;
//     let eee = ddd * WORKING_HOURS * ratePerHour;
//     return Math.ceil(bbb - ccc + eee);


// }
// console.log();
// priceWithMonthlyDiscount(29.654321, 155, 0.2547);
// console.log(priceWithMonthlyDiscount(29.654321, 155, 0.2547));

///////////////////
// let numDays = 230;
// let discount = 0.42;
// const DAY_RATE = dayRate(89);

// function aaa () {

//     count)) + ((numDays % DAYS_MONTH) * DAY_RATE);

// }
// console.log(aaa());


//////////////////////

// const knightIsAwake = true;
// function canExecuteFastAttack(knightIsAwake) {
//   return !knightIsAwake;

// }
// canExecuteFastAttack(knightIsAwake);
// console.log(canExecuteFastAttack(knightIsAwake));

// const knightIsAwake = false;
// const archerIsAwake = false;
// const prisonerIsAwake = false;
// // function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
// //    return knightIsAwake || archerIsAwake || prisonerIsAwake;
// // }
// // canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// // console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

// function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
//     return !archerIsAwake && prisonerIsAwake;
//   }
//   canSignalPrisoner(archerIsAwake, prisonerIsAwake);
//   console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));

///////////////////////

// function frontDoorResponse(line) {
//     return line[0];
// }
// frontDoorResponse('Stands so high');
// console.log(frontDoorResponse('Stands so high'));

// function frontDoorPassword(word) {
//     let str = word.toLowerCase();
//     return str.toUpperCase()[0] + str.substring(3);
// }
// frontDoorPassword('Shire');
// console.log(frontDoorPassword('Shire'));

// function frontDoorPassword(str) {
//     var space = str.trim();
//     return space[space.length - 1];
// }
// frontDoorPassword('SHire');
// console.log(frontDoorPassword('SHire'));

// function backDoorResponse(line) {
//     let space = line.trim();
//     return space[space.length - 6];
// }
// backDoorResponse('Stands so high   ');
// console.log(backDoorResponse('Stands so high   '));

// function backDoorPassword(word) {
//     let pl = ', please';
//     let str = word.toLowerCase();
//     return str.toUpperCase()[0] + str.substring(1) + pl;
// }
// backDoorPassword('horse');
// console.log(backDoorPassword('horse'));

// ////////////////////////////////////////

// function needsLicense(kind) {
//     if (kind === 'car') {
//         console.log(true);
//     } else if (kind === 'truck') {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// needsLicense('truck');


// function chooseVehicle(option1, option2) {
//     let recommendation = ' is clearly the better choice.';
//     let a = option1;
//     let b = option2;
//     if (a < b) {
//         return option1 + recommendation;
//     } else {
//         return option2 + recommendation;
//     }
// }
// chooseVehicle('Wuling Hongguang', 'Toyota Corolla');
// console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));



//   function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }

//   console.log(testNum(-5));
//   // expected output: "NOT positive"

// function calculateResellPrice(originalPrice, age) {
//     const a = 0.8;
//     const b = 0.7;
//     const c = 0.5;
//     if (age < 3) {
//         return originalPrice * a;
//     } else if (age > 10 ) {
//         return originalPrice * c;
//     } else {
//         return originalPrice * b;
//     }
// }
// calculateResellPrice(25679.99, 6.5);
// console.log(calculateResellPrice(25679.99, 6.5));

///////////////////////////////

// const numbers = [1, 'two', 3, 'four', '5'];
// numbers.unshift('2', 8, 'iii'); 
// console.log(numbers);

/////////////
// const position = 2;

// function getItem(cards, position) {
//     return cards[position];
// }

// getItem([1, 2, 4, 1], position);
// console.log(getItem([1, 2, 4, 1], position));

// const replacementCard = 6;

// function setItem(cards, position, replacementCard) {
//      cards[position] = replacementCard;
//      return cards;
// }
// setItem([1, 2, 4, 1], position, replacementCard);
// console.log(setItem([1, 2, 4, 1], position, replacementCard));

// const newCard = 8;
// function insertItemAtTop(cards, newCard) {
//   cards.unshift(newCard);
//   return cards;
// }
// insertItemAtTop([5, 9, 7, 1], newCard);
// console.log(insertItemAtTop([5, 9, 7, 1], newCard));

// function removeItem(cards, position) {
//     cards.splice(position, 1);
//     return cards;
// }
// removeItem([3, 2, 6, 4, 8], position);
// console.log(removeItem([3, 2, 6, 4, 8], position));

// const newCard = 8;
// function insertItemAtBottom(cards, newCard) {
//   cards.unshift(newCard);
//   return cards;
// }
// insertItemAtBottom([5, 9, 7, 1], newCard);
// console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

// const stackSize = 5;
// function checkSizeOfStack(cards, stackSize) {
//  let  aaa = cards.length;
//   return aaa === stackSize;
// }
// checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));

////////////////////////////

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdCount(birdsPerDay) {
    let count = 0;

    for (let i = 0; i < birdsPerDay.length; i++) {
        count += birdsPerDay[i];
    }
    return count;
}

console.log(totalBirdCount(birdsPerDay));




// function totalBirdCount(birdsPerDay, week) {
//     // return birdsPerDay.reduce((result, dayCount) => result + dayCount, 0);
//     const WEEKR = 7;
//     let startWeek = WEEKR * week ;
//     let endWeek = startWeek - WEEKR;
//     let count = 0;

//     for (let i = endWeek; i < startWeek; i++) {
//       count += birdsPerDay[i];
//     }

//     return count;
//   }
//   console.log(totalBirdCount(birdsPerDay,1));
// let birdsPerDay = [2, 5, 0, 7, 4, 1];

// function fixBirdCountLog(birdsPerDay) {
//     for (let i = 0; i < birdsPerDay.length; i+=2) {
//         birdsPerDay[i] += 1;

//     }
//     return birdsPerDay;

// }

// console.log(fixBirdCountLog(birdsPerDay));
// fixBirdCountLog(birdsPerDay);
// // => [3, 5, 1, 7, 5, 1]


/////////////////////////////////

// function timeToMixJuice(name) {
//     switch (name) {
//         case 'Pure Strawberry Joy':
//             console.log(0.5);
//             break;
//         case 'Energizer':
//         case 'Green Garden':
//             console.log(1.5);
//             break;
//         case 'Tropical Island':
//             console.log(3);
//             break;
//         case 'All or Nothing':
//             console.log(5);
//             break;
//         default:
//             console.log(2.5);

//     }

// }


// timeToMixJuice('Energizer');
// // => 3

// timeToMixJuice('Berries & Lime');
// // => 2.5



// function limesToCut(wedgesNeeded, limes) {
//    let count1 = 0;
//    while (count1 <= wedgesNeeded)
//    {for (let i = 0; aaa < wedgesNeeded; i++) {

//     var aaa = count1 += limes[i];

//   }}
//   return count1;

// }

// console.log(limesToCut(25, [6, 6, 10, 8, 6, 8, 6]));
// limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// // => 4


// 


const logg = "Hello world";

console.log(logg.slice(6, 1, 6));


































// export function limesToCut(wedgesNeeded, limes) {
//     let wedges = 0;
//     let totalWedges = 0;
//     let i = 0;
//       while ((i < limes.length) && (totalWedges <= wedgesNeeded)){
//       switch(limes[i]){
//       case 'small':
//         wedges = 6
//         break;
//       case 'medium':
//         wedges = 8
//         break;
//       case 'large':
//         wedges = 10
//         break;
//       default:
//         wedges = 0;
//     }
//     totalWedges += wedges;
//         if (wedgesNeeded !== 0) {
//           i++;
//         }
//     } 
//     return i;
//   }

// let now = new Date ();
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 10000000000; i++) {
//     let some = i **5;
// }

// let end = new Date();
// console.log(end - start);
// alert(end - start);
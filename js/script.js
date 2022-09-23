"use strick";


// const numberOfFilms = +prompt("How match films did you see?", "");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("You last film?", ""),
//       b = prompt('Your grade of this film?', ''),
//       c = prompt("You last film?", ""),
//       d = prompt('Your grade of this film?', '');
      

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



//------------------------------

if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error!');


const num = 50;
switch (num) {
    case 49:
        console.log('Not correctly');
        break;
    case 100:
        console.log('Not correctly');
        break;
    case 50:
        console.log('Correctly');
        break;
    default:
        console.log('Not today');
        break;        
}

//---------------------

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Not hungry!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'nonamelabel');


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Not hungry!');
// } else {
//     console.log('Get out from here!');
// }



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('So glad!');
} else {
    console.log('Get out from here!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);






let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);



console.log(!0);


а


console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined ||5);
console.log(5 === 5 && 3 > 1 || 5);


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
} else {
    console.log('Not today!')
}




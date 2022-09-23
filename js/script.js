"use strick";


const numberOfFilms = +prompt("How match films did you see?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("You last film?", ""),
      b = prompt('Your grade of this film?', ''),
      c = prompt("You last film?", ""),
      d = prompt('Your grade of this film?', '');
      

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





"use strict"

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели? ", "");
let lastMovie, grade;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

for (let i = 0; i < 2; i++) {
  lastMovie = prompt("Один из последниз просмотренных фильмов? ", "");
  grade = prompt("Насколько вы его оцените? ", "");
  personalMovieDB.movies[lastMovie] = grade;
}

console.log(personalMovieDB);
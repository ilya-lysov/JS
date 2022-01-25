"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

if (personalMovieDB.count <= 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
  let lastMovie = prompt("Один из последниз просмотренных фильмов? ", ""),
      grade     = prompt("Насколько вы его оцените? ", "");
  if (lastMovie != "" && grade != "" && lastMovie != null && grade != null && lastMovie.length < 50 && grade.length < 50) {
    personalMovieDB.movies[lastMovie] = grade;
    console.log("Done");
  } else {
    console.log("error");
    i--;
  }
}

console.log(personalMovieDB);
"use strict"

let numberOfFilms;

const start = function() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ", "")

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ", "")
  }
}

const rememberMyFilms = function() {
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
}

const detectedPersonalLevel = function() {
  if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

const writeYourFavoriteGenres = function() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, "");
  }
}

const showMyDB = function(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

rememberMyFilms();
detectedPersonalLevel();
writeYourFavoriteGenres();
showMyDB(personalMovieDB.private);
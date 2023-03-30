
'use strict';

export function movie() {
  interface PersonalMovieDB {
    count: number;
    movies: any;
    actors: unknown;
    genres: string[];
    private: boolean;
  }

  let numberOfFilms: string | number | null = prompt(
    'Сколько фильмов вы уже посмотрели?',
    ''
  );

  // const numberOfFilms = 5;

  const personalMovieDB: PersonalMovieDB = {
    count: typeof numberOfFilms === 'string' ? +numberOfFilms: numberOfFilms = 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
  };

  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (
    personalMovieDB.count < 30 &&
    personalMovieDB.count >= 10
  ) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Some error');
  }

  const answersTo = (): void => {
    for (let i = 0; i < 2; i++) {
      let questionWhatMovie: string | null = prompt(
        'Один из последних просмотренных фильмов?',
        ''
      );
      let questionWhatYourPrice: string | null = prompt(
        'На сколько оцените его?',
        ''
      );
      if (
        questionWhatMovie != '' &&
        questionWhatMovie !== null &&
        questionWhatMovie.length < 50 &&
        questionWhatYourPrice != '' &&
        questionWhatYourPrice !== null
      ) {
        personalMovieDB.movies[questionWhatMovie] =
          questionWhatYourPrice;
        console.log('done');
      } else {
        console.log('erorr');
        i--;
      }
    }

    console.log(personalMovieDB);
  };

  // answersTo();
}

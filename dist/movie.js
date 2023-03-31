'use strict';
export function movie() {
    let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    // const numberOfFilms = 5;
    const personalMovieDB = {
        count: typeof numberOfFilms === 'string' ? +numberOfFilms : numberOfFilms = 0,
        movies: {},
        actors: {},
        genres: [],
        private: false,
    };
    if (personalMovieDB.count && personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count &&
        personalMovieDB.count < 30 &&
        personalMovieDB.count >= 10) {
        console.log('Вы классический зритель');
    }
    else if (personalMovieDB.count && personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }
    else {
        console.log('Some error');
    }
    const answersTo = () => {
        for (let i = 0; i < 2; i++) {
            let questionWhatMovie = prompt('Один из последних просмотренных фильмов?', '');
            let questionWhatYourPrice = prompt('На сколько оцените его?', '');
            if (questionWhatMovie != '' &&
                questionWhatMovie !== null &&
                questionWhatMovie.length < 50 &&
                questionWhatYourPrice != '' &&
                questionWhatYourPrice !== null) {
                personalMovieDB.movies[questionWhatMovie] =
                    questionWhatYourPrice;
                console.log('done');
            }
            else {
                console.log('erorr');
                i--;
            }
        }
        console.log(personalMovieDB);
    };
    // answersTo();
}

'use strict';
export function movie() {
    let numberOfFilms = 0;
    function start() {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    const personalMovieDB = {
        count: typeof numberOfFilms === 'string' ? +numberOfFilms : numberOfFilms = 0,
        movies: {},
        actors: {},
        genres: [],
        private: false,
    };
    const showMyDb = () => {
        !personalMovieDB.private ? console.log(personalMovieDB) : null;
    };
    showMyDb();
    const writeYourGenres = () => {
        let answerFor = '';
        for (let i = 0; i < 3; i++) {
            answerFor = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (answerFor && answerFor !== null) {
                personalMovieDB.genres[i] = answerFor;
            }
            else {
                i--;
            }
        }
    };
    // writeYourGenres();
    function detectPersonalLevel() {
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
    }
    // detectPersonalLevel();
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
    };
    // answersTo();
}

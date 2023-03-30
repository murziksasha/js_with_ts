/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длиннее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
'use strict';
export function movie() {
<<<<<<< HEAD
    // let numberOfFilms = prompt(
    //   'Сколько фильмов вы уже посмотрели?',
    //   ''
    // );
    const numberOfFilms = 5;
=======
    let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    // const numberOfFilms = 5;
>>>>>>> acbebbe5917f5ec68b0573c40eb7f65a559f75a6
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false,
    };
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count < 30 &&
        personalMovieDB.count >= 10) {
        console.log('Вы классический зритель');
    }
    else if (personalMovieDB.count >= 30) {
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

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
'use strict';
export function movie() {
    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        private: false,
        start: function () {
            let answer = prompt('Сколько фильмов вы уже посмотрели?', '');
            while (answer === '' || answer === null) {
                answer = prompt('Сколько фильмов вы уже посмотрели?', '');
            }
            if (answer !== null) {
                this.count = answer;
            }
        },
        showMyDb: function () {
            !personalMovieDB.private ? console.log(personalMovieDB) : null;
        },
        writeYourGenres: function () {
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
        },
        detectPersonalLevel: function () {
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
        },
        answersTo: function () {
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
        },
    };
    personalMovieDB.start();
    console.log(personalMovieDB.count);
}

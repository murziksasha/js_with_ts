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

export function movie(): void {
  interface PersonalMovieDB {
    count: number ;
    movies: any;
    actors: unknown;
    genres: string[];
    private: boolean;
    showMyDb: () => void;
    writeYourGenres: () => void;
    detectPersonalLevel: () => void;
    answersTo: () => void;
    start: () => void;
    toggleVisibleMyDB: () => boolean;
  }

  const personalMovieDB: PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(): void {
      let answer: string | null =  prompt('Сколько фильмов вы уже посмотрели?', '');
        if (answer === null || answer.trim() === "") {
          personalMovieDB.start();
        } else {
          let number: number = parseInt(answer);
          if (isNaN(number) || number === 0) {
            console.log("Вы ввели не число или ноль");
            personalMovieDB.start();
          } else {
            console.log(typeof number); // "number"
            this.count = number;
          }
        }
    },
    toggleVisibleMyDB: function(): boolean {
      return this.private = !this.private;
    },
    showMyDb: function (): void {
      !personalMovieDB.private ? console.log(personalMovieDB) : null;
    },
    writeYourGenres: function (): void {
      let answerFor: string | null = '';
      for (let i = 0; i < 3; i++) {
        answerFor = prompt(
          `Ваш любимый жанр под номером ${i + 1}`,
          ''
        );
        if (answerFor && answerFor !== null && answerFor.trim() !== '') {
          this.genres[i] = answerFor;
        } else {
          i--;
        }
      }
    },
    detectPersonalLevel: function(): void {
      if (this.count && this.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
      } else if (
        this.count &&
        this.count < 30 &&
        this.count >= 10
      ) {
        console.log('Вы классический зритель');
      } else if (this.count && this.count >= 30) {
        console.log('Вы киноман');
      } else {
        console.log('Some error');
      }
    },
    answersTo: function(): void {
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
          this.movies[questionWhatMovie] =
            questionWhatYourPrice;
          console.log('done');
        } else {
          console.log('erorr');
          i--;
        }
      }
    },

  };

personalMovieDB.writeYourGenres();

personalMovieDB.genres.forEach((item, i) => {
  console.log(`Любимый жанр #${i+1} - это ${item}`)
})

}

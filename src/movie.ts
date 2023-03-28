/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

    

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

export function movie() {
  interface PersonalMovieDB {
    count: string;
    movies: any;
    actors: unknown;
    genres: string[];
    private: boolean;
  }

  let numberOfFilms = prompt(
    'Сколько фильмов вы уже посмотрели?',
    ''
  );

  const personalMovieDB: PersonalMovieDB = {
    count: numberOfFilms as string,
    movies: {},
    actors: {},
    genres: [],
    private: false,
  };

  const answersTo = (): void => {
    let questionWhatMovie: string | null = prompt(
      'Один из последних просмотренных фильмов?',
      ''
    );
    let questionWhatYourPrice: string | null = prompt(
      'На сколько оцените его?',
      ''
    );
    if (questionWhatMovie !== undefined && questionWhatMovie !== null) {
      if(questionWhatYourPrice !== undefined && questionWhatYourPrice !== null) {
        personalMovieDB.movies[questionWhatMovie] = questionWhatYourPrice;
      } else {
        questionWhatYourPrice = prompt(
          'На сколько оцените его?',
          ''
        );
      }
    } else {
      answersTo();
    }
    console.log(personalMovieDB);
  };

  answersTo();

}
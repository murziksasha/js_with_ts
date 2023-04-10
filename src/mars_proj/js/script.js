/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */
'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против",
    ]
};
const advImages = document.querySelectorAll('div.promo__adv img');
const genreDiv = document.querySelector('div.promo__genre');
const divPromo = document.querySelector('div.promo__bg');
const inputFilm = document.querySelector('.adding__input');
const promoListParent = document.querySelector('ul.promo__interactive-list');
const promoItem = document.querySelectorAll('li.promo__interactive-item');
const inputCheckbox = document.querySelector('input[type=checkbox]');
const trashDiv = document.querySelectorAll('div.delete');
advImages.forEach(item => {
    item.remove();
});
genreDiv.textContent = 'драма';
divPromo ? divPromo.style.cssText = 'background-image: url(./img/bg.jpg);' : null;
promoListParent ? promoListParent.innerHTML = '' : null;
function updateFilms(newOne = '') {
    if (newOne) {
        movieDB.movies.push(newOne);
    }
    promoListParent.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {
        item ? promoListParent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${limitLength(movieDB.movies[i])}
            <div class="delete"></div>
            </li> 
            ` : null;
    });
}
function limitLength(item) {
    return item.length > 21 ? item = item.slice(0, 21) + '...' : item;
}
updateFilms();
document.addEventListener('submit', e => {
    e.preventDefault();
    if (inputFilm.value === '') {
        return;
    }
    updateFilms(limitLength(inputFilm.value));
    inputCheckbox?.checked ? console.log('add the favorite film!') : false;
    inputFilm.value = '';
});

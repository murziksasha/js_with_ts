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
        "Скотт Пилигрим против...",
    ]
};
const advImages = document.querySelectorAll('div.promo__adv img');
const genreDiv = document.querySelector('div.promo__genre');
const divPromo = document.querySelector('div.promo__bg');
const promoListParent = document.querySelector('ul.promo__interactive-list');
const promoItem = document.querySelectorAll('li.promo__interactive-item');
advImages.forEach(item => {
    item.remove();
});
genreDiv.textContent = 'драма';
divPromo ? divPromo.style.cssText = 'background-image: url(./img/bg.jpg);' : null;
movieDB.movies.sort();
promoListParent ? promoListParent.innerHTML = '' : null;
movieDB.movies.forEach((item, i) => {
    item ? promoListParent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
    <div class="delete"></div>
    </li> 
` : null;
});

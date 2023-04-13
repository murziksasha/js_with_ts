'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
    const addForm = document.querySelector('form.add');
    const inputFilm = document.querySelector('.adding__input');
    const promoListParent = document.querySelector('ul.promo__interactive-list');
    const promoItem = document.getElementsByClassName('promo__interactive-item');
    const inputCheckbox = document.querySelector('input[type=checkbox]');
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(advImages);
    const makeChanges = () => {
        genreDiv.textContent = 'драма';
        divPromo ? divPromo.style.cssText = 'background-image: url(./img/bg.jpg);' : null;
    };
    makeChanges();
    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);
    function addFilm(newOne = '') {
        if (newOne) {
            movieDB.movies.push(newOne);
            updateFilms(movieDB.movies, promoListParent);
        }
    }
    function updateFilms(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((item, i) => {
            item ? parent.innerHTML += `<li class="promo__interactive-item" data-current='${i}'>${i + 1} ${limitLength(item)}
                <div class="delete"</div>
                </li> 
                ` : null;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', e => {
                btn.parentElement?.remove();
                movieDB.movies.splice(i, 1);
                updateFilms(films, parent);
            });
        });
    }
    function limitLength(item) {
        return item.length > 21 ? item = item.slice(0, 21) + '...' : item;
    }
    updateFilms(movieDB.movies, promoListParent);
    addForm.addEventListener('submit', e => {
        const target = e.target;
        e.preventDefault();
        if (inputFilm.value === '') {
            return;
        }
        addFilm(limitLength(inputFilm.value));
        inputCheckbox?.checked ? console.log('add the favorite film!') : false;
        target.reset();
    });
});

export function cards() {
    class MenuCard {
        src;
        alt;
        title;
        descr;
        price;
        parentSelector;
        classes;
        parent;
        transfer = 37;
        constructor(src, alt, title, descr, price, parentSelector, classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parentSelector = parentSelector;
            this.classes = classes;
            this.changetoUAH();
            if (this.parentSelector) {
                this.parent = document.querySelector(parentSelector);
            }
        }
        changetoUAH() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length > 0) {
                this.classes.forEach(item => {
                    element.classList.add(item);
                });
            }
            element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
            this.parent?.append(element);
        }
    }
    new MenuCard('./src/img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container', ['menu__item', 'big']).render();
    new MenuCard('./src/img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 15, '.menu .container', ['menu__item', 'big']).render();
    new MenuCard('./src/img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 11, '.menu .container', ['menu__item', 'big']).render();
}

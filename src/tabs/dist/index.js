import { tabs } from './tabs.js';
import { timer } from './timer.js';
import { modal } from './modal.js';
import { cards } from './cards.js';
window.addEventListener('DOMContentLoaded', () => {
    timer();
    tabs();
    modal();
    cards();
});

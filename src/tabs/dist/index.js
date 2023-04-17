import { tabs } from './tabs.js';
import { timer } from './timer.js';
import { modal } from './modal.js';
window.addEventListener('DOMContentLoaded', () => {
    timer();
    tabs();
    modal();
});

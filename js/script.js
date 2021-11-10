import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cads';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {
    openModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerID);
    timer('.timer', '2021-12-31');
    cards();
    calc();
    forms('form', modalTimerID);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });

});
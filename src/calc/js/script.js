"use strict";
const inputUah = document.querySelector('#uah');
const inputUsd = document.querySelector('#usd');
inputUsd.value = '';
inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', './js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            if (inputUah.value) {
                const result = (+inputUah.value / data.current.usd).toFixed(2);
                inputUsd.value = result.toString();
            }
        }
        else {
            inputUsd.value = ' Something wrong ... ';
        }
    });
});

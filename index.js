'use strict';

let first__pair = document.querySelector('.first__pair');
let second__pair = document.querySelector('.second__pair');
let third__pair = document.querySelector('.third__pair');
let first__extended__section = document.querySelector('.first__extended__section');
let second__extended__section = document.querySelector('.second__extended__section');
let third__extended__section = document.querySelector('.third__extended__section');

first__pair.addEventListener('click',function(){
    first__pair.classList.add('selected__pair');
    first__extended__section.classList.remove('hide__extended__section');
    second__extended__section.classList.add('hide__extended__section');
    third__extended__section.classList.add('hide__extended__section');
    second__pair.classList.remove('selected__pair');
    third__pair.classList.remove('selected__pair');
})



second__pair.addEventListener('click',function(){
    second__pair.classList.add('selected__pair');
    second__extended__section.classList.remove('hide__extended__section');
    first__extended__section.classList.add('hide__extended__section');
    third__extended__section.classList.add('hide__extended__section');
    first__pair.classList.remove('selected__pair');
    third__pair.classList.remove('selected__pair');
})



third__pair.addEventListener('click',function(){
    third__pair.classList.add('selected__pair');
    third__extended__section.classList.remove('hide__extended__section');
    first__extended__section.classList.add('hide__extended__section');
    second__extended__section.classList.add('hide__extended__section');
    first__pair.classList.remove('selected__pair');
    second__pair.classList.remove('selected__pair');
})



"use strict";
const buttonOpen = document.querySelector('.hamburher');
const hiddenMenu = document.querySelector('.menus');
const closeMenu = document.querySelector('.krest')

console.log(buttonOpen);
buttonOpen.addEventListener('click', function(){

hiddenMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', function(){
    hiddenMenu.classList.add('hidden');
});
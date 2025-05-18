'use strict'

// Constantes y variables
const imgList  = document.querySelectorAll('img');
const lightbox = document.querySelector('.lightbox');
const grande   = document.querySelector('.grande');
const closeBtn = document.querySelector('.close')

// Cuando hago CLICK en img
    // .lightbox se le ADD la clase isActive
    // .grande le añadimos el atributo SRC de la img

imgList.forEach (( eachBox, index )=>{
    imgList[index].addEventListener('pointerdown', ()=>{
        lightbox.classList.add('isActive');
        grande.src = imgList[index].src;
    });
});

  
// Cuando CLICK en .close
    // .lightbox se le REMOVE la clase isActive

closeBtn.addEventListener('pointerdown', ()=>{
    lightbox.classList.remove('isActive');
});
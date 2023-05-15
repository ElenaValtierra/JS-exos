'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// add event listener to btns
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Selecting elements
console.log(document.documentElement); // all dom
console.log(document.head);
console.log(document.body);


// console.log();
console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('.section'));

document.getElementById('section--1');
const allBtns = document.getElementsByTagName('button');
console.log(allBtns);

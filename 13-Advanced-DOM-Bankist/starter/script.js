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
// console.log(document.documentElement); // all dom
// console.log(document.head);
// console.log(document.body);


// // console.log();
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

// document.getElementById('section--1');
// const allBtns = document.getElementsByTagName('button');
// console.log(allBtns);

//*  Creating and inserting Elements
// .insertAdjacentHTML method takes two parameters: the position where you want to insert the HTML content and the actual HTML content you want to insert
/*
'beforebegin': Inserts the HTML content immediately before the element.
'afterbegin': Inserts the HTML content at the beginning of the element.
'beforeend': Inserts the HTML content at the end of the element.
'afterend': Inserts the HTML content immediately after the element.
*/
//  Exemple
// const element = document.getElementById('myElement');
// const htmlContent = '<p>This is some text.</p>';

// element.insertAdjacentHTML('afterend', htmlContent);


  //? The div has been created but it is not present in the DOM 
const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent = 'We use cookies for improved functionality and analytics';

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// ? We add the div after the header so that it will be present in the DOM - first child in header

  //?DOM elements are unique and can only exist in 1 place at a time, so it will prepend and then move to the append - Except if we copy it using clineNode(true) - true for the child elements

  // CHILD
// header.prepend(message); // child beginning
header.append(message); // child end
// header.append(message.cloneNode(true)); // child end

// SIBLINGS
// header.before(message); // sister before element
// header.after(message); // sister after element

// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  // Before they use to do DOM traversing to access the element, as you could not access it directly
  // message.parentElement.removeChild(message);
});

// -------------------------------
// * Style, attributes and classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);

// To get a style from an element - getComputedStyle()
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// ! the height is not taken into account, idk why
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';


  // ? CUSTOM PROPERTIES - setProperty is the :root in .css to change several things at the same time
document.documentElement.style.setProperty('--color-primary', 'pink')


//* Attributes
const logo = document.querySelector('.nav__logo');
//* Classic ones - existe déjà
console.log(logo.alt);
console.log(logo.src); // shows the absolute link (same in href), you need a getAttribute to get the relative one, as show below
console.log(logo.getAttribute('src'));
console.log(logo.className);
  // setting them:
  logo.alt = 'Bautiful minimalist logo';

//* Non-standard - created by me
console.log(logo.designer); // 'undefined' - Not the way to access it as it is me that created this attribute
console.log(logo.getAttribute('designer'));// 'Elena' - correct way to get it
   // setting them:
   logo.setAttribute('company', 'Bankist');

  //  dataset - to get from the attribute data : data-version-number="3.0", version-number in camelcase
console.log(logo.dataset.versionNumber);

// * Classes 
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use - it overrides all classes at once
logo.className = 'jonas'
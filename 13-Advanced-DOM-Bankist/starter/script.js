'use strict';



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Tabbs component 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Animation navbar
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// add event listener to btns
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// -------------------
// *Implementing Smooth Scrolling

// Button scrolling
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log('The whole thing:', s1coords);

    // e.target is the element that was clicked
    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );
    // Scrolling
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth'
    // });

    section1.scrollIntoView({ behavior: 'smooth' })

});




//  //
//  * Page navigation - /////////////////////////////////////////////////////////////////////////////////////////////////

//? NOT EFFICIENT - If we attach an eventhandler to 10k elements as below the performance will be affected, as we will create 10k copies of the same function. So we use, event delegation in option B

// A
// document.querySelectorAll('.nav__link').forEach((element) => {
//     console.log(element);
//     element.addEventListener('click', function(e) {
//         e.preventDefault();
//         console.log(element);
//         // this is the current element
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     });
// });

// B - event delegation
// 1. Add event listener to common parent element (nav__links)
// 2. Determine what element originates the event 

document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
    // Matching strategy - as if we click in nav__link it also does a log for it BUT we only want nav__links
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// * Tabbed component
tabsContainer.addEventListener('click', function(e) {
    e.preventDefault();
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    // Guard Clause - if statement that will be returned eary if some contition is matched. Below, when there is nothing clicke me return the function, as it is null, it is falsey value, so not falsey returns true so it stops here as it returns.
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

// Menu Fade animation
const handleHover = function(e, opacity) {
    // console.log(this, e.currentTarget);
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        // selecting siblig elements - By going to parent and then selecting the children.
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });

        logo.style.opacity = this;
    }
}

//  As thhe event listener is expecting a function we cannot simply write it intead of the function nav.addEventListener('mouseover', handleHover(e, 0.5)); so we:

// Passing "argument" into handler 
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Or we can use bind() method as it returns a function, thje 'this variable will be set to the value 1 or 0.5

// * Sticy scroll bar - Intersection observer API

// callback function will be called every time the element targeted (section1) is intersecting the root element at the thrshold (that is 10% -> 0.1) we defined
const obsCallback = function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
    })
};

const obsOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Selecting elements
// console.log(document.documentElement); // all dom
// console.log(document.head);
// console.log(document.body);


// // console.log();
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

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

// message.innerHTML =
//     'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// ? We add the div after the header so that it will be present in the DOM - first child in header

//?DOM elements are unique and can only exist in 1 place at a time, so it will prepend and then move to the append - Except if we copy it using clineNode(true) - true for the child elements

// CHILD
// header.prepend(message); // child beginning
// header.append(message); // child end
// header.append(message.cloneNode(true)); // child end

// SIBLINGS
// header.before(message); // sister before element
// header.after(message); // sister after element

// Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//     message.remove();
//     // Before they use to do DOM traversing to access the element, as you could not access it directly
//     // message.parentElement.removeChild(message);
// });

// -------------------------------
// * Style, attributes and classes

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);

// // To get a style from an element - getComputedStyle()
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // ! the height is not taken into account, idk why
// message.style.height =
//     Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';


// // ? CUSTOM PROPERTIES - setProperty is the :root in .css to change several things at the same time
// document.documentElement.style.setProperty('--color-primary', 'pink')


// //* Attributes
// const logo = document.querySelector('.nav__logo');
// //* Classic ones - existe déjà
// console.log(logo.alt);
// console.log(logo.src); // shows the absolute link (same in href), you need a getAttribute to get the relative one, as show below
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
// // setting them:
// logo.alt = 'Bautiful minimalist logo';

// //* Non-standard - created by me
// console.log(logo.designer); // 'undefined' - Not the way to access it as it is me that created this attribute
// console.log(logo.getAttribute('designer')); // 'Elena' - correct way to get it
// // setting them:
// logo.setAttribute('company', 'Bankist');

// //  dataset - to get from the attribute data : data-version-number="3.0", version-number in camelcase
// console.log(logo.dataset.versionNumber);

// // * Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // Don't use - it overrides all classes at once
// logo.className = 'jonas';


// //* Events and events handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//     alert('You have activated the mouseenter 🐭');
//     // To remove the event once it has been executed we use:
//     // h1.remove('mouseenter', alertH1);
// }

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// //* property onmouseenter

// // h1.onmouseenter = function(e) {
// //     alert('You have activated the onmouseenter 🐭');
// // }

// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     // Where the event (click) happened not where it is attached
//     console.log('LINK', e.target, e.currentTarget);

//     // Stop propagation
//     // e.stopPropagation();

// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log('CONTAINER', e.target, e.currentTarget);

// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);

//     // when the parameter is true, the event handler will no longer listen to bubbling events but rather to capturing events
// }, true);

//  DOM Traversing

// const h1 = document.querySelector('h1');

// // Going Downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); // will show everything eventext
// console.log(h1.children); // only get the elements inside h1
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// // Going upwards: selecting parents

// console.log('-------Going upwards: selecting parents-------');

// console.log(h1.parentNode);
// console.log(h1.parenElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-secondary)';

// console.log('-------Going sideways: siblings-------');

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
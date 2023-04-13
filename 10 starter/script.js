'use strict';
/*
const bookings =[];

// the numPassenger=1 '=' means that if it is indefined it will take the value that has been assigned
const createBooking = (flightName, numPassenger=1, price=199 * numPassenger) =>{
    const booking = {
        flightName,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123'); // will take the default values as it is falsely
createBooking('LG458', 4, 688); // we give all the values
createBooking('LG058', 4); // will get the last falsely value that has been assigned
createBooking('LG058',undefined, 400); // we skip a parameter when we say it is undefined BUT we have to specify it

*/

// --------------

// const flight = 'LH123';

// const elena = {
//     name: 'Elena Valtierra',
//     passport: 545641516588
// }

// const checkIn = (flightNum, passager)=>{
//     flightNum = 'LHGGG'; // we reassign -> creates a COPY
//     passager.name = 'Ms. ' + passager.name; // the object elena will be modified
// // if(passager.passport === 545641516588){
// //     alert('Checked in')
// // }else{
// //     alert('Wrong passport!')
// // }
// };

// checkIn(flight, elena);
// console.log(flight); // not modified
// console.log(elena); // modified



// Passing a primitive type to a function is the same as creating a copy outside of the function, the VALUE is copied (const flightNum = flight;)
//* when we pass an object to a function, it is like copying an object if we change it in the copy it will change in the original

// Passing by value & passing by reference(does not exist in JS)


// * Fiest-class function 
// Stores functions in variables/ properties
// pass functions as arguments to OTHER functions
// Return functions from functions
// Call methods on functions

// * Higher-order functions
// A function that receives another function as an argument, that returns a new function or both, thanks to the first-class functions

//  ----------------------
// Callback functions

// const oneWord = (str) => {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = (str) => {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function

// const transformer = (str, fn) => {
//     console.log(`Original string: ${str}`);
//     console.log(`Transforned string: ${fn(str)}`);
//     console.log(`Transforned string BY: ${fn.name}`);
// }

// transformer('Javascript is the best!', oneWord);
// // transformer('Javascript is the best!', upperFirstWord);

// ///////////////////////////////////////
// // Functions Returning Functions
// const greet1 = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };

// //  Arrow function callback (same as above)
// const greet = greeting => name => console.log(`${greeting} ${name}`); // greeting is a function that returns another function that uses console.log



// const greetertHey = greet('Hey');
// greetertHey('Elena');
// greetertHey('Jonas');

// // -----------------
// // The call abd apply methods
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function(){}, (same as the one written below) 
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     }
// };

// lufthansa.book(589, 'Elena Valtierra');
// lufthansa.book(666, 'Tony Moncer');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book; // So that we do not repeat ourselves, we save the function in a variable to reuse the code.
// // book(578 , 'Greg Garcia'); // ? cannot do this as it is a simple function call that will return a undefined as it has a 'this' inside

// book.call(eurowings, 232, 'Sarah Smith');
// book.call(lufthansa, 458, 'Pablo Escobar');

// console.log(lufthansa.bookings);
// console.log(eurowings.bookings);

// const flightData = [584, 'George Cooper'];
// book.apply(lufthansa, flightData);
// console.log(lufthansa.bookings);

// // -----------------
// // Bind Method

// const bookEW = book.bind(eurowings); // it gives a funcion thet you can call and it is already attached to the argument
// const bookLH = book.bind(lufthansa);

// bookEW(234, 'Pablo Escobar');

// lufthansa.planes = 300;
// console.log(lufthansa);
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);


// console.log(addVAT(100));

// const addTaxRate = (rate) => {
//     return function(value) {
//         return value + value * rate;
//     };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// * Challenge 1 Functions!

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript 
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉



GOOD LUCK 😀
*/



// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0,0,0,0]. More in the next section
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         // get answer
//         let answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}`));
//         // Register the answer
//         // If the first 2 are true the execute this.answers[answer]++;
//         typeof answer === 'number' && answer < this.options.length && this.answers[answer]++;
//         // console.log(this.answers);
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log('Bitch im back');
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     },
// };

// // poll.registerNewAnswer();

// const pollBtn = document.querySelector('.poll');
// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// /*
// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// */
// // ! This keyword
// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

// // call is used to get a new this keyword
// // the his from the object is this.answers so we need to create a new object:
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// * Immediately Invoked Function Expression (IIFE)

// (function () {
//     console.log('This will never run again');
// })();


///////////////////////////////////////
// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Exemple 1 closures

let f;

const g = function () {
    const a = 23;

    f = function () {
        console.log(a * 2);
    }
}


const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
}



g();
f();
console.dir(f); // variable environment a:23


// Re-assign f function
h();
f();
console.dir(f); // variable environment b:777

// Exemple 2 closures

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passagers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);


// Challenge Closures 
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    const body = document.querySelector('body');

    body.addEventListener('click', function () {
        header.style.color = 'blue';
    })

}());

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

// -----------------
// The call abd apply methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){}, (same as the one written below) 
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
};

lufthansa.book(589, 'Elena Valtierra');
lufthansa.book(666, 'Tony Moncer');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book; // So that we do not repeat ourselves, we save the function in a variable to reuse the code.
// book(578 , 'Greg Garcia'); // ? cannot do this as it is a simple function call that will return a undefined as it has a 'this' inside

book.call(eurowings,232, 'Sarah Smith');
book.call(lufthansa, 458, 'Pablo Escobar');

console.log(lufthansa.bookings);
console.log(eurowings.bookings);

const flightData = [ 584, 'George Cooper'];
book.apply(lufthansa, flightData);
console.log(lufthansa.bookings);
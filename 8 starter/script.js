'use strict';

// // Scoping in practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     let output = `You are ${firstName}, born in ${birthYear}`
//     function printAge() {
//         console.log(output);
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating a new variable with same name as scope's variable
//             const firstName = 'Steven';
//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT';

//             const str = `Oh! You're a millenial, ${firstName}, ${age}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// printAge();

// console.log(calcAge(1995));

var me = 'Elena';
let job = 'superstar';
const year = 1995;

// Functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a+b;
}

// // It will be saved in the pc memory (hoisting) but it is unaccessible and so if it is called before declaration it will not be found
// // Var will appear as undefined
// var addExpr = function (a,b){
//     return a +b;
// }

// const addArrow = (a,b)=> a+b;

// // Declare variables at the top of the code and do not use var!
// let numProducts = 10;

// if(!numProducts) deleteShoppingCart();


// function deleteShoppingCart(){
//     console.log('All products deleted!');
// }


// // If there is an error before it will show as undefined
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);// true => properties declared with var have a property on the global window object
// console.log(y === window.y);// false
// console.log(z === window.z);// false

// console.log(this); //window global

// console.log(calcAge(1995)); 

// function calcAge(birthYear) {
//         console.log(2037 - birthYear);
//         // console.log(this); // undefined (it is the this keyford of the function)
// }

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this); // window global as it 'this' is the parent in arrow functions (it is NOT the this keyford of the function)
// }
// console.log(calcAgeArrow(1990)); 

const elena = {
    year: 1995,
    calcAge: function(){
        console.log(this); // elena object // if cristina.calcAge() is called after then it will be 17, as it is cristina's
        console.log(2037 - this.year);
    }
}

console.log(elena.calcAge());

const cristina = {
    year: 2017
};

// copy frrom the object elena the method => method borrowing
cristina.calcAge = elena.calcAge;
console.log(cristina);
console.log(cristina.calcAge());// this will be cristina as it is the object that calls the method


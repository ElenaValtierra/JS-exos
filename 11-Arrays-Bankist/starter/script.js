'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//* Bankist App 


// Better to pass the data into the function instead of doing it globally as it is a good practice.
const displayMovements = function(movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        // html literals 
        const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}
displayMovements(account1.movements);

const calcDisplayBalance = function(movements) {
    const balanceShort = movements.reduce((acc, mov) => acc + mov, 0);
    console.log(balanceShort);
    labelBalance.textContent = `${balanceShort}€`;
};
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //* SLICE - does NOT modify the original array
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));// start of slide (included 'c'), end of slide (won't be included 'e')
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); // Last element of an array
// console.log(arr.slice(1, -2));

// // create a shallow copy of an array 2 ways:
// console.log(arr.slice());
// console.log([...arr]);

// //* SPLICE - deletes in the original array
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2)); // eliminates the values in that possition from original array

// console.log(arr);

// //* REVERSE - It mutates original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //* CONCAT - It does NOT mutate original array
// const letters = arr.concat(arr2);
// console.log(letters);
// // We also learned through the spread operator, same results
// console.log([...arr, ...arr2]);

// //* JOIN
// console.log(letters.join('-'));

// //* The 'at' method
// const arr3 =[58,54,3,5];
// //  best option to get the last value of an array if not you have to get the length and it is longer
// console.log(arr3.at(-1));

// //* Looping Arrays:Foreach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // forEach is a higher order function that needs a funtion to tell it what to do.

//  for(const [i, movement] of movements.entries()){
//   if(movement > 0){
//     console.log(`Movement: ${i+1} You have deposited ${movement}`);
//   }else{
//     console.log(`Movement: ${i+1} You have withdrawn ${movement}`);
//   }
//  }

//  console.log('----forEach------');

//  movements.forEach(function(movement, i, array){
//   if(movement > 0){
//     console.log(`Movement: ${i+1} You have deposited ${movement}`);
//   }else{
//     console.log(`Movement: ${i+1} You have withdrawn ${movement}`);
//   }
//  })

// //* ForEach with maps ans sets
// // Map

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
// console.log(`${key} : ${value}`);
// });

// // Set
// const currenciesUnique =new Set(['EUR','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _ , map){
//   console.log(`${value}`);
// });

//* Challenge
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things

// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

// const checkDogs = function (dogsJulia, dogsKate) {
//   //1.1 create a shallow copy of dogsJulia
//   const dogsJuliaShallow = [...dogsJulia];
//   //1.2 remove cats
//   // console.log(dogsJuliaShallow);
//   dogsJuliaShallow.splice(-2);
//   // console.log(dogsJuliaShallow);
//   dogsJuliaShallow.splice(0, 1);
//   // console.log(dogsJuliaShallow);

//   // 2. Create an array with both Julia's (corrected) and Kate's data

//   const dogs = [...dogsJuliaShallow, ...dogsKate];
//   // console.log(dogs);

//   // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🤗")

//   dogs.forEach(function (dog, i, array) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is is still a puppy 🤗`);
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('-----');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//* The map method

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov, i, array) {
//     return mov * eurToUsd;
// });
// //? Arrow function version
// //const movementsUSD = movements.map(mov => mov * eurToUsd);


// console.log(movements);
// console.log(movementsUSD);


// const movementsDescriptions = movements.map((movement, i) => {
//     return `Movement: ${i + 1} You have ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(movement)}`
// });

// console.log(movementsDescriptions);

//*  Reduce Method
// const balance = movements.reduce(function(acc, cur, i, arr) {
//     console.log(`Iteration number ${i} : ${acc}`);
//     return acc + cur;
// }, 0);
// console.log(balance);

// const balanceShort = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balanceShort);
// // Max value

// const maxValue = movements.reduce(function(acc, mov) {
//     if (acc > mov)
//         return acc;
//     else
//         return mov;
// }, movements[0]);
// console.log(maxValue);

//* Coding challenge 2

const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges);
    const olderDogs = humanAges.filter(age => age >= 18);
    console.log(olderDogs);
    const calcAvrg = olderDogs.reduce(function(acc, curr) {
        return acc + curr / olderDogs.length;
    }, 0);
    const calcAvrgShort = olderDogs.reduce((acc, curr) => (acc + curr), 0) / olderDogs.length;
    console.log(calcAvrg);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log('------------');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
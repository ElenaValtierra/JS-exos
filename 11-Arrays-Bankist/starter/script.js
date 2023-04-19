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
const displayMovements = function(movements){
  containerMovements.innerHTML = '';
movements.forEach(function(mov, i){
  const type = mov >0 ? 'deposit': 'withdrawal';
  // html literals 
  const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
})
}
displayMovements(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]


const checkDogs = function(dogsJulia, dogsKate){
// create a shallow copy of dogsJulia


  console.log(dogsJulia);
  dogsJulia.splice(-2);
  console.log(dogsJulia);
 dogsJulia.splice(0,1);
 console.log(dogsJulia);



}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
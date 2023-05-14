'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-05-08T14:43:26.374Z',
    '2023-05-09T18:49:59.371Z',
    '2023-05-11T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-05-08T14:43:26.374Z',
    '2023-05-09T18:49:59.371Z',
    '2023-05-11T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  // Write if the date is today or yesterday
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);

    // const year = date.getFullYear();
    // // day/month/year
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }

}

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Create a new date (it has been created by js so we can use new Date)
    const date = new Date(acc.movementsDates[i]);
    // we pass acc.locale to formatMovementDate
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    // const formattedMovement = new Intl.NumberFormat(acc.locale, { style: 'currency', currency: acc.currency }).format(mov.toFixed(2));

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each second print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;
    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  }
  // Set time to 5 min
  let time = 120;
  // Call the timer every second : the first time it is called it will we in another function to call itsef.
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//! FAKE ALWYAS LOG IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// ? Experimenting with the API (Internalization dates)


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', // also numeric, 2-digit
      year: 'numeric',
      // weekday: 'long' //also: short, narrow
    }

    const locale = navigator.language;
    console.log(locale);

    // iso language code table to see different countries
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    /*
      const date = `${now.getDate()}`.padStart(2, 0);// the padding will start at possition 2 andt the pad wil be a '0' so if it's 12 it won't work only if its one number like 2
      const month = `${now.getMonth() + 1}`.padStart(2, 0);
      const year = now.getFullYear();
      const hours = `${now.getHours()}`.padStart(2, 0);
      const minutes = `${now.getMinutes()}`.padStart(2, 0);
  
      // day/month/year
      const today = `${date}/${month}/${year}, ${hours}:${minutes}`;
      labelDate.textContent = today;
      */

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // If I already have a timer running in another account then I log out, otherwise there will be two timers interposing at the same time.
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add trsnsfer date 
    currentAccount.movementsDates.push(new Date().toISOString()); // js will convert it into a formatted string when using .toISOString
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset a timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add trsnsfer date 
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset a timer
      clearInterval(timer);
      timer = startLogOutTimer();

    }, 2500)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and checking numbers

// console.log(Number.parseInt('23rem'));
// console.log(Number.parseFloat(23.5));
// console.log(Number.isNaN('20'));
// console.log(Number.isFinite(23/0));

// // Math and rounding

// console.log(Math.sqrt(25));
// console.log(25** (1/2))

// console.log(Math.max(5,18,23,11,2));
// console.log(Math.min(5,18,23,11,2));
// // area of a circle

// console.log(Math.PI * Number.parseFloat('10px')**2);

// console.log(Math.trunc(Math.random()*6)+1);

// const randomInt = (min,max)=> Math.trunc(Math.random()* (max-min)+1)+min;
// console.log(randomInt(10,20));

// console.log(Math.round(23.9));
// console.log(Math.round(23.2));
// console.log(Math.floor(23.9));// round down
// console.log(Math.ceil(23.2)); // round up


// // Rounding integers
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

//* Reminder
// console.log(5%2); // 1
// console.log(5/2); // 2.5 -> 5 = 2 + 2 + 1

// console.log(8%3);
// console.log(8/3); // 8 = 2 * 3 +2

// const isEven = n => n%2 === 0;
// console.log(isEven(23));
// console.log(isEven(8));

// labelBalance.addEventListener('click', function(){
//   [...document.querySelectorAll('.movements__row')]
//   .forEach(function(row, i){
//     if (i%2 === 0) row.style.backgroundColor = 'lightblue'; // every 2nd time its blue
//     if (i%3 === 0) row.style.backgroundColor = 'lightyellow'; // every third row is yellow
//     });
// });

//* Numeric Separators
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.1415;
// console.log(PI);

// console.log(Number('230_000'));
// console.log(parseInt('230_000'));

//* BigInt
// console.log(54852152454212454512455445454475); // 5.485215245421245e+31
// console.log(54852152454212454512455445454475n); // n says it's a bigInt so it will become accurate

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(4838430248342043823408394839483204n);
// console.log(BigInt(48384302));

// // Operations
// console.log(10000n + 10000n);
// console.log(36286372637263726376237263726372632n * 10000000n);
// // console.log(Math.sqrt(16n));

// const huge = 20289830237283728378237n;
// const num = 23;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(huge + ' is REALLY big!!!');

//* Working with dates

// const now = new Date();
// console.log(now);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());


// const future2 = new Date(2037, 10, 19, 15, 23);
// console.log(future2);
// console.log(future2.getFullYear());
// console.log(future2.getMonth());
// console.log(future2.getDate());
// console.log(future2.getDay());
// console.log(future2.getHours());
// console.log(future2.getMinutes());
// console.log(future2.getSeconds());
// console.log(future2.toISOString());
// console.log(future2.getTime());

// console.log(new Date(2142256980000));

// console.log(Date.now());

// future2.setFullYear(2040);
// console.log(future2);

///////////////////////////////////////
// Operations With Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

// //* INTERNATIONALIZING NUMBERS
// const number = 254552145121451.56;

// const options = {
//   style: 'currency', // unit (needs to use unit: mph), percent, currency
//   unit: 'mile-per-hour', // or celsius
//   currency: 'EUR',
//   // useGrouping: false // number without separators
// }

// console.log('US: ', new Intl.NumberFormat('en-US', options).format(number));
// console.log('Spain: ', new Intl.NumberFormat('es-ES', options).format(number));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(number));

//* setTimeout and setInterval

// const ingredients = ['olives', 'spinach', 'tomatos'];

// setTimeout((ing1, ing2, ing3) => console.log(`Here is your pizza with ${ing1}, ${ing2} and ${ing3} 🍕`), 3000, ...ingredients);

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

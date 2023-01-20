'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);


// function logger() {
//     console.log(`My name is Jonas`)
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 7));

// const mixFruits = fruitProcessor(4, 3);
// console.log(mixFruits);


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1993);

// const calAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// console.log(calcAge1(1995), calAge2(1999));

//* const calcAge3 = birthYear => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement}`;
// }


// console.log(yearsUntilRetirement(1995, `Elena`));
// console.log(yearsUntilRetirement(1980, `Bob`));

// const cutPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = (apples, oranges) => {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `The juice was made with ${apples} apples (${applePieces} pieces) and ${oranges} oranges (${orangePieces} pieces).`;
//     return juice;
// }

// const juiceMix = fruitProcessor(2, 3);

// console.log(juiceMix);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName}, you have ${retirement} years left for retirement 👌;`
//     } else {
//         return `${firstName}, you have already been retired for ${Math.abs(retirement)} years;`
//     }


//     // return retirement;
//     // return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const checkWinner = (dolphinesAvrg, koalasAvrg) => {
//     if (dolphinesAvrg >= koalasAvrg * 2) {
//         console.log(`Dolphines win (${dolphinesAvrg} vs ${koalasAvrg})`);
//     } else if (koalasAvrg >= dolphinesAvrg * 2) {
//         console.log(`Koalas win (${koalasAvrg} vs ${dolphinesAvrg})`);
//     } else {
//         console.log(`Nor Dolphines ${dolphinesAvrg} nor Koalas ${koalasAvrg} win 🤷‍♀️`);
//     }
// }

// const calAverage = (firstScore, secondScore, thirdScore) => {
//     const averageScore = (firstScore + secondScore + thirdScore) / 3;
//     return averageScore;
// }
// // * const calAge2 = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore)/3;

// let dolphinesAvrg = calAverage(44, 23, 71);
// dolphinesAvrg = calAverage(85, 54, 41);

// let koalasAvrg = calAverage(65, 34, 49);
// koalasAvrg = calAverage(23, 34, 27);

// console.log(dolphinesAvrg, koalasAvrg);

// console.log(checkWinner(dolphinesAvrg, koalasAvrg));


// const friends = [`Michael`, `Peter`, `Steven`, `Elena`];
// console.log(friends[0]);
// console.log(friends.length);

// friends[2] = `Carolina`;
// console.log(friends[2]);


// const years = new Array(1995, 1999, 2001, 2005);
// console.log(years[3]);
// console.log(years[years.length - 2]);

// console.log(typeof years);

// const friends = [`Michael`, `Peter`, `Steven`, `Elena`];

// const hello = friends.push('Jay');

// console.log(friends);
// console.log(hello);

// const added = friends.unshift('Helena');

// console.log(friends);
// console.log(added);

// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// const shifted = friends.shift();
// console.log(friends);
// console.log(shifted);

// console.log(friends.indexOf('Steven'));


// const calcTip2 = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tip = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];
// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

// console.log(bills, tip, total);

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * 0.15;
//         // console.log(`The tip is ${tip} (15%), of a bill of ${bill}`);
//         return tip;
//     } else {
//         const tip = bill * 0.2;
//         // console.log(`The tip is ${tip} (20%), of a bill of ${bill}`);
//         return tip;
//     }
// }

// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);

// const bill = 100;

// const elena = {
//     firstName: 'Elena',
//     lastName: 'Valtierra',
//     age: 2023 - 1995,
//     job: 'developer',
//     friends: ['Marcos', 'Itziar', 'Georgie', 'Laurie'],
//     test: bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// };

// console.log(elena.test);
// console.log(elena.age);
// console.log(elena['age']);

// const interestedIn = prompt(`What do you know about Elena? Choose btw firstName, lastName, age, job, friends`);



// if (elena[interestedIn]) {
//     console.log(elena[interestedIn]);

// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`)
// }


// elena.location = 'Spain';
// elena['twitter'] = '@flufluit';

// console.log(elena);

// // * Challenge
// // El mejor amigo de Elena es Marcos

// console.log(elena.friends[0]);
// console.log(elena.friends.length);

// console.log(`El mejor amigo de ` + elena['firstName'] + ` es ` + elena.friends[0] + ` de ` + elena.friends.length + ` amigos.`);

// console.log(`Elena has ${elena.friends.length} friends, and her best friends is called ${elena.friends[0]}`);


// const elena = {
//     firstName: 'Elena',
//     lastName: 'Valtierra',
//     birthYear: 1997,
//     job: 'developer',
//     friends: ['Marcos', 'Itziar', 'Georgie', 'Laurie'],
//     hasDriverLicense: true,
//     //We need a function expression to create this method.
//     // calcAge: function () {
//     //     // console.log(this);
//     //     // console.log(this.job);
//     //     // console.log(this.friends[1]);
//     //     // console.log(this['friends'][1]);
//     //     // console.log(this['hasDriverLicense']);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         // console.log(this.age);
//         // console.log(this);
//         return this.age;
//     },

//     // reviewElena: function () {
//     //     let stringhasLicence = this.hasDriverLicense ? 'a' : 'not';
//     //     // console.log(this);
//     //     return stringhasLicence;
//     // },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and she has ${this.hasDriverLicense ? 'a' : 'no'} driving license!!!`
//     }

// };

// // console.log(elena.calcAge(1995));
// console.log(elena['calcAge']());

// console.log(`My age is ${elena.age}`);


// console.log(elena.getSummary());


// const personMark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const personJohn = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         console.log(this);
//         return this.bmi;
//     }
// }



// console.log(personMark.calcBMI(), personJohn.calcBMI());

// if (personMark.calcBMI() > personJohn.calcBMI()) {
//     console.log(`${personMark.firstName} ${personMark.lastName}'s BMI (${personMark.bmi}) is higher than ${personJohn.firstName} ${personJohn.lastName}'s (${personJohn.bmi})`);
// } else if (personJohn.calcBMI() > personMark.calcBMI()) {
//     console.log(`${personJohn.firstName} ${personJohn.lastName}'s BMI (${personJohn.bmi}) is higher than ${personMark.firstName} ${personMark.lastName}'s (${personMark.bmi})`);
// }

//  * Fo loop



// for (let rep = 5; rep <= 10; rep++) {
//     console.log(`Lifiting weights repetition ${rep} 💪🏼`);
// }


// const elena = [
//     'Elena',
//     'Valtierra',
//     2037 - 1991,
//     'developer',
//     ['Laurie', 'Bea', 'Ludmi', 'Sonia'],
//     true
// ];

// // const types = [];
// console.log('-----Continue----');
// for (let i = 0; i < elena.length; i++) {
//     if (typeof elena[i] !== 'string') continue;
//     console.log(elena[i], typeof elena[i]);
// }
// console.log('-----Break----');
// for (let i = 0; i < elena.length; i++) {
//     if (typeof elena[i] === 'number') break;
//     console.log(elena[i], typeof elena[i]);
// }
// // console.log(types);

// // elena[5] = 'testy test';



// const years = [1995, 2000, 1997, 2005, 1985];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     // let calcAge = 2023 - years[i];
//     // ages[i] = calcAge;
//     ages.push(2023 - years[i]);
// }

// console.log(ages);


// const elena = [
//     'Elena',
//     'Valtierra',
//     2037 - 1991,
//     'developer',
//     ['Laurie', 'Bea', 'Ludmi', 'Sonia'],
//     true
// ];

// for (let i = elena.length - 1; i >= 0; i--) {
//     console.log(i, elena[i]);
// }

// for (let exercise = 1; exercise <= 5; exercise++) {
//     console.log(`Stating exercise number ${exercise}`);
//     for (let rep = 1; rep < 4; rep++) {
//         console.log(`The exercise number ${exercise}: Lifting weight repetition ${rep} 💪🏼`);
//     }
// }

// for (let rep = 5; rep <= 10; rep++) {
//     console.log(`Lifiting weights repetition ${rep} 💪🏼`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: ${rep} 💪🏼`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`The loop is about to end`);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip3 = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip3(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);


const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));

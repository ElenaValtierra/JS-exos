
// // *** Values and Variables ***

// // Assigment - Values and Variables
// const country = 'Spain';
// const continent = 'Europe';
// let population = 47;

// console.log(country);
// console.log(continent);
// console.log(population);


// // *** Data Types ***

// // Assigment - Data Types

// let isIsland = 'Spain';
// isIsland = true;

// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// *** let, const and var ***

// // Assigment - let, const and var

// language = 'spanish';

// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2018;


// const avrgAge = (ageJonas + ageSarah) / 2;

// console.log(ageJonas, ageSarah, avrgAge);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Elena';
// const lastName = 'Valtierra';

// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// console.log(x);

// x += 10;
// console.log(x);

// x *= 10;
// console.log(x);

// // Assigment -  Basic Operators

// let splitPopulation = population / 2;
// console.log(splitPopulation);

// splitPopulation++;
// console.log(splitPopulation);

// const finland = 6;

// console.log(splitPopulation > finland);

// const avrgPopulation = 33;

// console.log(population > avrgPopulation);

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

// console.log(description);

// *** Challenge 1 ***

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + " that was born in " + birthYear;

console.log(jonas);

// template literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} that was born in ${birthYear}`;

console.log(jonasNew);

console.log(`String
into
multiple
lines`); */

// const age = 9;

// if (age >= 18) {
//     console.log(`old enough 👌`);
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`UNDERAGE 🤦‍♀️ wait for ${yearsLeft} years!`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// *** Coding Challenge 2 ***

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// // console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// // console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }

// // Type conversion and type coersion
// const inputYear = `1995`;

// console.log(inputYear, Number(inputYear) + 10);

// console.log(String(25));
// console.log(Number(`John`));
// console.log(typeof NaN);

// const favorite = Number(prompt(`What is your favorite number?`));

// console.log(typeof favorite, favorite);

// if (favorite === 23) { console.log(`23 IS THE BEST NUMBER!`); }
// else if (favorite === 7) { console.log(`You have selected 7`); }
// else if (favorite === 4) {
//     console.log(`You have selected 4!!!`);
// } else {
//     console.log(`None of your numbers matter to me`);
// }


// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log(`You are ready to go!`);
// } else {
//     console.log(`You need some glasses...`);
// }

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`You are ready to go!`);
// } else {
//     console.log(`You need some glasses...`);
// }

// *** Challenge 3 *** 

// const scoreDolphines = 96 + 108 + 89 ;
// const scoreKoalas = 88 + 91 + 110;
// console.log(scoreDolphines, scoreKoalas);

// const averageDolphines = scoreDolphines / 3;
// const averageKoalas = scoreKoalas / 3;
// console.log(averageDolphines, averageKoalas);

// if (averageDolphines > averageKoalas) {
//     console.log(`The winners are THE DOLPHINES with ${scoreDolphines} points👏`);
// } else if (averageDolphines === averageKoalas) {
//     console.log(`We have a tie! The same score of ${scoreDolphines}`);
// } else {
//     console.log(`The Koalas win with ${scoreKoalas} points`);
// }

// Bonus 1
// const scoreFirstGameDolphines = 97;
// const scoreSecondGameDolphines = 112;
// const scoreThirdGameDolphines = 101;

// const scoreFirstGameKoalas = 109;
// const scoreSecondGameKoalas = 95;
// const scoreThirdGameKoalas = 123;

// const scoreDolphines = scoreFirstGameDolphines + scoreSecondGameDolphines + scoreThirdGameDolphines;
// const scoreKoalas = scoreFirstGameKoalas + scoreSecondGameKoalas + scoreThirdGameKoalas;



// console.log(scoreDolphines, scoreKoalas);

// const averageDolphines = scoreDolphines / 3;
// const averageKoalas = scoreKoalas / 3;
// console.log(averageDolphines, averageKoalas);



// if (averageDolphines > averageKoalas && averageDolphines >= 100) {
//     console.log(`The winners are THE DOLPHINES with ${averageDolphines} points👏`);
// } else if ((averageDolphines === averageKoalas) && averageDolphines >= 100 & averageKoalas >= 100) {
//     console.log(`We have a tie! The same score of ${averageDolphines}`);
// } else if (averageKoalas > averageDolphines && averageKoalas >= 100) {
//     console.log(`The Koalas win with ${averageKoalas} points`);
// } else {
//     console.log(`No one wins the treophy 🤷‍♀️`);
// }


// let day = 'saturdnay';

// switch (day) {
//     case 'monday':
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Record videos`);
//         break;
//     default:
//         console.log(`Not a valide day!`);
// }

// day = 'saturday';

// if (day === 'monday') {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === `thursday`) {
//     console.log(`Write code examples`);
// } else if (day === 'friday') {
//     console.log(`Record videos`);
// } else if (day === 'saturday' || day === `sunday`) {
//     console.log(`Record videos`);
// } else {
//     console.log(`Not a valide day!`);
// }


// const age = 18;

// age >= 18 ? console.log(`You can happily drink wine 😎`) : console.log(`I can start drinking water ✔`);

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

// console.log(`I like to drink ${age >= 18 ? 'wine' : `water`}`)

// console.log(`I like to drink ${drink}`)

// *** Challenge 4 ***

const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const total = bill + tip;
console.log(total);

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);


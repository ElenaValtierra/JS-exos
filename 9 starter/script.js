'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section




// // * ** Coding Challenge 1 **

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// * Challenge 1

//   // * 1. Create one player array for each team (variables 'players1' and 'players2') -> destructuring

//   const [players1, players2] = game.players;
//   console.log(players1, players2);

//   // * 2.  The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

//   // The rest syntax will put fieldPlayers in an array
//   const [gk, ...fieldPlayers] = players1;
//   console.log(gk, fieldPlayers);


//   // * 3. Create an array 'allPlayers' containing all players of both teams (22 players)
//   const allPlayers = [...players1, ...players2];
//   console.log(allPlayers);

//   // * 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
//   const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic'];
//   console.log(players1Final);

//   // * 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//    let team1, draw, team2;
//   ({team1, x: draw, team2} = game.odds);
//   console.log(draw);

//   // const {odds: {team1,x:draw, team2},} = game;
//   // console.log(draw);

//   // * 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
//   // 6.1 Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

//   const printGoals = function(...players){ // putting the spread back in an array - rest
//       console.log(players);
//       console.log(`The number of players are ${players.length}`);

//   };


//   printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//   printGoals(...game.scored);

//   // * 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
//   team1 < team2 && console.log('Team 1 is more likely to win'); // In exo 5 we give access to team1 and team2 -> the && condition is only effective if it is true.
//   team2 < team1 && console.log('Team 2 is more likely to win');

// * Challenge 2
// * ///////////////////////////

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// console.log(`-----EXO 1----`);


// const gameScored = game.scored;
// console.log(gameScored);

// for (const [i, el] of gameScored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// };

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember
// // avrg = sum all numb/ array.length
// console.log(`-----EXO 2----`);
// const oddScore = Object.values(game.odds);
// console.log(oddScore);

// const [a, , c] = oddScore;
// console.log(a, c);

// const newOddScore = [a, c];
// console.log(newOddScore);

// let sum = 0;
// for (const value of newOddScore) {
//   sum += value;
// }
// // console.log(sum);
// let average = sum / oddScore.length;
// console.log(`The sum is ${sum} with an average of ${average}`);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names
// console.log(`-----EXO 3----`);

// for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr= team === 'x'? 'draw':`victory ${game[team]}`;
//   console.log(`Odds of ${teamStr} ${odd}`);
// }

// // * 4. Bonus: Create an object called 'scorers' which contains the names of the 
// // players who scored as properties, and the number of goals as the value. In this 
// // game, it will look like this:
// * Maps
// * ////////////////////

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fireze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open 😊')
.set(false, 'we are closed 😣');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest);
rest.delete(2);
console.log(rest);

const arr = [1,2];
console.log(rest.set(arr, 'Tesy test'));
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

const questions = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(questions);

console.log(questions.get('question'))
for (const [key, value] of questions){
  // console.log(key, value);
  if(typeof key=== 'number'){
    console.log(`Answer ${key} : ${value}`)
  }
};

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(questions.get(questions.get('correct') === answer));
// Convert Map to array

const questionsArray = [...questions]
// console.log(questionsArray);
// console.log(questionsArray[0][1]);

// console.log(questions.entries());
console.log(...questions.keys());
console.log(...questions.values());


// * Sets
// * ////////////////////
// const orderSet = new Set([
//   'Pasta',
//   'Pasta',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);

// console.log(orderSet);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.add('Bread'));

// console.log(orderSet.delete('Pizza'));
// console.log(orderSet);

// for(const order of orderSet)
// console.log(order);

// const staff = [
//   'Waiter',
//   'Chef',
//   'Waiter',
//   'Manager',
//   'Chef',
//   'Waiter',
// ];

// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique);
// console.log(new Set(staff).size);


// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   }
// };


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // Instead of writing openingHours: openingHours, if it has the same name you can write it only once
//   openingHours,
//   // The method can also be witten like this:
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex = 1, time = '20:30', address }) { // We passed one argument (the object)
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} in ${address}`);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   }
// };
// // * Looping Objects **********************
// //  * //////////////////////////////////////////

// // Property names - keys
// const properties = Object.keys(openingHours);
// console.log(properties);// It is an array
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property names - Values
// const values = Object.values(openingHours);
// console.log(values);// It is an array with the object's values

// for (const hour of values) {
//   console.log(hour.open);
// }

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   // console.log();
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// * Opional Chaining **********************
//  * //////////////////////////////////////////
// If mon does not exist instead of returning an error it will show undefined
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // Methods
// for(const day of days){
//   // console.log(day);
//   //  Getting the index dynamically from the array days
//     // If it is undefined then it will use the OR operator to show closed
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On day ${day} the opening time is ${open}`)
// }

// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orders?.(0,1) ?? 'Method does not exist'); //does not exist

// // Arrays
// // const users = [{name:'Elena', email:'hello@elena.com'}];
// const users = [];
// console.log(users[0]?.name ?? 'Array empty');


// * Looping Arrays: the for-of loop
//  Looping the whole menu

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for(const item of menu) console.log(item);
// // To get the position we access the parameters .entries that will give the position and then the

// // console.log(menu.entries());
// for(const [i, element] of menu.entries()){// we destructure it
//   console.log(`${i+1}: ${element}`); // To get a list that starts at one
// }
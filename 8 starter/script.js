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

// var me = 'Elena';
// let job = 'superstar';
// const year = 1995;

// // Functions
// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a,b){
//     return a+b;
// }

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

// const elena = {
//     year: 1995,
//     calcAge: function(){
//         console.log(this); // elena object 
//         console.log(2037 - this.year);
//     }
// }

// console.log(elena.calcAge());

// const cristina = {
//     year: 2017
//             // if cristina.calcAge() is called after then it will be 17, as it is cristina's
// };

// // copy frrom the object elena the method => method borrowing
// cristina.calcAge = elena.calcAge;
// console.log(cristina);
// console.log(cristina.calcAge());// this will be cristina as it is the object that calls the method

// var firstName = 'Mathilda';

// const elena = {
//     firstName: 'Elena',
//     year: 1995,
//     calcAge: function(){
//         //console.log(this); // elena object 
//         console.log(2037 - this.year);
//         const isMillenial = () =>{ // ? Use arrow function as the parent is another function
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }
//         isMillenial();
//     },
//     greet: ()=> {// ! do not use arrow function here as it uses the scope
//         console.log(this); // global window
//         console.log(`Hey ${this.firstName}`)} // var goes to the global object so it has access here, do not ude!
// }

// elena.greet();
// elena.calcAge(); 

// * *** Primitives vs objects ***

// const me = {
//     name: 'Elena',
//     age: 27
// }

// const friend = me;

// console.log(me);
// console.log(friend);

// friend.age = 30;
// console.log('Me: ',me);
// console.log('Friend: ',friend);

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;

// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age : 27
// };

// const marriedJessica = jessica;

// marriedJessica.lastName = 'Davis';

// // console.log('Before marriage', jessica);
// // console.log('After marriage', marriedJessica);

// // Copying objects

// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age : 27,
//     family: ['Alice', 'Bob']
// };

// const jessicaCopy = Object.assign({}, jessica2); // properties copied from the original // ? shallow copy made (copies the first level not the array if modified)
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Maxime', 'Antoine');

// console.log('Before marriage', jessica2);
// console.log('After marriage', jessicaCopy);

// // todo Deep clone with libary





const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    },
    orderDelivery: function({ starterIndex, mainIndex = 1, time = '20:30', address }) { // We passed one argument (the object)
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} in ${address}`);
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients);
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

// * Logical Asignment operator
// * ///////////////////////

// const rest1 ={
//     name: 'Capri',
//     numGuests: 20,

// };

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };
// // Or assignment operator 
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish assignment operator (if null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>'; // Undefined -> && ggives the first falsey value so owner is true but no anonynous
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // gives back '<ANONYMOUS>' as .owner does not exist

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // If no time main idex then one can be asigned inthe objet received by default bu "= 1" or "20:30"
// restaurant.orderDelivery({
//         address: 'Via del Sole, 21',
//         starterIndex: 1,
//     })
//     // * Rest Pattern and Spread Operator
//     // * ///////////////////////
//     //  In arrays
// const [Focaccia, , ...others] = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(Focaccia, others);

// // In objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //  2. Functions
// const add = function(...numbers) {
//     console.log(numbers);
//     // let sum = 0;
//     // for (let i = 0; i < numbers.length; i++)
//     //     sum += numbers[i];
//     // console.log(sum);
// };

// add(0, 4);
// add(1, 4);

// const x = [23, 5, 7];
// // console.log(...x);
// add(...x);

// restaurant.orderPizza('Mushrooms', 'Onions', 'Spinach');

// *Nullish Coalesing Operator (??)
// * ///////////////////////
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // prettier-ignore 
// // The Nullish operator makes 0 and '' NOT falsey values -> only if it gives null or undefined
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// *Short Circuiting
// * ///////////////////////
//  OR ||
// console.log(undefined || '' || 0 || 'Hello' || 23 || null); // Will stop at the first truethy value or the last faly if none is true -> 'Hello
// console.log(null || '' || 0 || undefined || 23 || 'Hello'); // 23

// // AND &&
// console.log(23 && 'Hello' && null && '' && 0 && undefined); // Will stop at the first false value -> null

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // Even though numberGuests is 0 it is considered falsy.

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);


// *Spread operator
// * ///////////////////////

// const arr = [7, 8, 9];
// // add an array to a new array (before):
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // jpin two arrays together
// // Main menu and starter menu
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Real world example 
// const ingredients = [
//     // prompt(`Let's maake pasta! Ingredient 1?`),
//     // prompt(`Ingredient 2?`),
//     // prompt(`Ingredient 3?`)
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects are not iterable
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);


// * Destructuring Objects ***
// * /////////////////////////////
// Order does not matter in objects
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

// console.log(restaurantName, hours, tags);

// // Mutaling variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const { fri } = openingHours; // To have access to opening hours you have tu destructure it befere.
// console.log(fri);

// const { open } = fri;
// console.log(open);








// * Destructying Arrays ******
// * /////////////////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);


// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // Check if the medoth is working
// console.log(restaurant.order(2, 0));

// // Receive 2 return values from the function
// const [starter, maincourse] = restaurant.order(2, 0);
// console.log(starter, maincourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// // *destructure within the destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values when we do not know the array's length

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r is undefined if we do not equal it to one = 1


// * ** Coding Challenge 1 **

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
   
    // * 1. Create one player array for each team (variables 'players1' and 'players2')
    const players1 = game.players[0];
    console.log(players1);
    const players2 = game.players[1];
    console.log(players2);
    // * 2.  The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
    
    let goalKeeper, rest;
    let fieldPlayersRest = [goalKeeper, ...rest] = players1;

    const gk = goalKeeper;
    console.log(gk);

    const fieldPlayers = rest;
    console.log(rest);

    // * 3. Create an array 'allPlayers' containing all players of both teams (22 players)
    const allPlayers = [...players1, ...players2];
    console.log(allPlayers);

    // * 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
    const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic'];
    console.log(players1Final);

    // * 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
     let team1, draw, team2;
    ({team1, x: draw, team2} = game.odds);
    console.log(draw);

    // * 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
    // 6.1 Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

    const printGoals = function( numbPlayers, ...numbGoals){ // putting the spread back in an array - rest
       let sum = 0;
        console.log(numbGoals);
        console.log(...numbPlayers);

        for(let i =0; i<numbGoals.length; i++){
            sum += numbGoals[i];
        }
        console.log(sum);
        
    };

    const playersNames = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
    const goals = [1, 3, 4, 5];
    console.log(...goals);// destructuring array - spread

    printGoals(...playersNames,...goals);
    printGoals(playersNames);


    // * 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator

    const team1a = game.odds.team1 < game.odds.team2;
    const team2a = game.odds.team2 < game.odds.team1;


    console.log(team1a);
    console.log(team2a);

    // console.log(team1a || team2a = 'hemmp');

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>'; // Undefined -> && ggives the first falsey value so owner is true but no anonynous
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // gives back '<ANONYMOUS>' as .owner does not exist

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

    // console.log(game.odds.team1 &&= '<Team 1>' );
    // console.log(game.odds.team2 &&= '<Team 2>' );



    // const player2 = []; // goalKeeper[0]

    // const gk = []; // goalkeepers name
    // const fieldPlayers = []; // remaining 10 field players

    // const allPlayers = []; // both teams of a total of 22 players

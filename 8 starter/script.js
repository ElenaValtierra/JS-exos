'use strict';

// Scoping in practice

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    let output = `You are ${firstName}, born in ${birthYear}`
    function printAge() {
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating a new variable with same name as scope's variable
            const firstName = 'Steven';
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh! You're a millenial, ${firstName}, ${age}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// printAge();

// console.log(calcAge(1995));
// Pretty important thing here - conditonals using if/else, then, if/elseif, etc.
console.log("---Simple If/Else Example---")
let isAlive = false;

if(isAlive)
{
    console.log("Patient is Alive :)");
}

else
{
    console.log("Patient is dead :(");
}

// The if statement evalautes whatever is in the parenthesis and converts it to boolean
// 0, empty string, null, undefined, NaN become false - all others are true

let condition = (isAlive == 1);

if(condition)
{
    console.log("This will never execute");
}

else
{
    console.log("This will execute");
}

// If/elseif/else... similar to most programming languages

testCond = 2020;

let testStr = `The year is ${testCond}`;

if(testCond == 2015)
{
    console.log(testStr);
}

else if(testCond == 2019)
{
    console.log(testStr);
}

else
{
    console.log(testStr);
}

//Conditional Operator ?
// Makes If/Else statements more compact and in a more simple way
// let result = condition ? value1 : value2;
// If condition is truthy, then value 1 is returned. Return value 2 otherwise. 
console.log('---Conditional Operator---')

let result = (5 < 6) ? 1 : 0; // Will return 1 since 5 < 6 is true
let result2 = (5 > 6) ? 1 : 0; // Will return 0 since 5 > 6 is false
console.log(`result: ${result}\nresult2: ${result2}`);

// Conditional operators can be nested like if/else statements but this quickly becomes bulky and sort of defeats the purpose of the operator
let age = 2;

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' : 'What an unusual age!';

console.log(message);

/* Equivalent if/elseif/else statements:

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

*/

console.log('\n-----Tasks-----');
// Task 1
// This logs 'Hello' because "0" is not an empty string - it is truthy and evaulates as true
console.log('---Task 1---');
if("0"){
    console.log('Hello')
}

// --- Task 2 ---
// Get user input directly from Node console for Task 2
let readline = require("readline");

console.log("\n---Task 3---")
    
let answer2 = 16;

if(answer2 > 0)
{
    console.log(1);
}
else if(answer2 < 0)
{
    console.log(-1);
}

else if(answer2 == 0)
{
    console.log(0);
}

// Task 4
console.log('\n---Task 4---');
let result3;
let a, b = 6;

/* Rewrite this using conditional operator ?

if (a + b < 4) {
  result3 = 'Below';
} else {
  result3 = 'Over';
}

*/

result3 = (a + b < 4) ? 'Below' : 'Over';

console.log(result3);

// Task 5
console.log('\n---Task 5---');
/*  Rewrite this using conditional operator: 

if (login == 'Employee') {
  msg = 'Hello';
} else if (login == 'Director') {
  msg  = 'Greetings';
} else if (login == '') {
  msg  = 'No login';
} else {
  msg  = '';
}

*/

let login = 'Director';
let msg = (login == 'Employee') ? 'Hello' : 
(login == 'Director') ? 'Greetings' : 
(login == '') ? 'No login' : '';

console.log(msg);

// Moved this to the bottom because of strangeness with how it output stuff
console.log('\n---Task 2---');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('What is the "official" name of JavaScript?\nInput: ', function (answer) {
    if(answer == "ECMAScript")
    {
        console.log("Right!");
    }
    else
    {
        console.log("You don't know? ECMAScript!");
    }
    rl.close();
  });
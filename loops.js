// Only covers basic while/for loops in JS
// See other articles for for...in and for...of loops 

console.log("---While Loop Example---")
let i = 0;

while(i<3)
{
    console.log(i);
    i++;
}

console.log("\n---Do While Loop Example---")
// do...while loops always execute at least once regardless of the condition
do{
    console.log('This executes anyway');
} while(i < 3);

// For loops are extremely similar to how they work in C++ and Java
// for(begin; condition/end; step size){ execution code goes here };
// j is an inline variable, meaning it's scope is only within the loop
console.log("\n---Basic Loop Example---")
for(let j = 0; j < 10; j+=2)
{
    console.log(j);
}

let j = 10;

console.log("\n---Loop Component Skipping---")
// Any part of the loop can be skipped - start can be declared outside of loop, step can be done inside loop. Condition can also be checked in-loop (break can be used to end a loop)
for(; j < 20; j+=2)
{
    console.log(j);
}

// Break keyword can be used to exit loop completely; continue will skip to the next iteration

console.log("\n---Continue Example---")
for(k = 0; k < 10; k++)
{
    if(k%2 == 0)
    {
        continue;
    }

    else
    {
        console.log(k);
    }
}

// Break keyword example
console.log("\n---Break Loop Example---")
for(l = 20; /* No Condition */ ; l+=20)
{
    if(l > 100)
    {
        console.log(`l = ${l}, breaking from loop...`)
        break;
    }
}

// Break/Continue cannot be used with conditional operator
// Labels can be used to provide names or identifiers. Break/continue can be called on specific loops from anywhere using these
// Labels DO NOT allow jumping between lines like some older languages do (Assembly comes to mind)
console.log("\n---Loop Labels Example---")
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
        let result = i + j;

        if(result == 5) break outer; 
    }
  }
  
console.log('Done!');

console.log('\n-----Tasks-----');
console.log('\n---Task 1---');
// How many times will console.log() be called?
i = 3;

while (i) { // Will loop as long as i is truthy - should call 3 times before i is considered falsey
  console.log( i-- );
}

console.log('\n---Task 2---');
i = 0;
while (++i < 5) console.log( i ); // Should output the numbers 1, 2, 3, 4

i = 0;
while (i++ < 5) console.log( i ); // Should output numbers 0, 1, 2, 3, 4

console.log('\n---Task 3---');
for (let i = 0; i < 5; i++) console.log( i ); // Will output 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log( i ); // Will output 0, 1, 2, 3, 4 because the number i is not incremented until after the condition is checked and the loop body is executed
// Unless the value returned by the prefix increment is used there is no real difference between ++i and i++

console.log('\n---Task 4---');
for(i = 2; i <= 10; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }
}

console.log('\n---Task 5---');

/* Convert this to a while loop

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

*/
i = 0;

while(i < 3)
{
    console.log(`number ${i}!`);
    i++;
}

console.log('\n---Task 6---');
// Repeat getting user input until user inputs number > 100. Don't need to handle type errors - input will always be numbers
console.log('See comments - cannot run using just Node.js')
/*
let input;

do
{
    input = prompt('Enter a number that is larger than 100: ', 0);
} while((input != undefined || input != null) && input <= 100);

This won't run with Node.js but this is the correct answer

*/

console.log('\n---Task 7---');
// A prime number is prime if it is only divisible by itself and 1 evenly (no remainder). Write code that outputs prime numbers from an interval between 2 and n.
// A more thorough and probabilistic test for primeness should be used for larger numbers, namely Miller-Rabin or the Quadratic Sieve. This is pretty simple and gets bogged down by even relatively small numbers

let maxRange = 100000;

currPrimeNum: for(let primeCanidate = 2; primeCanidate <= maxRange; primeCanidate++)
{
    for(let primeWitness = 2; primeWitness < primeCanidate; primeWitness++)
    {
        if(primeCanidate % primeWitness == 0)
        {
            continue currPrimeNum;
        }
    }

    console.log(primeCanidate);
}
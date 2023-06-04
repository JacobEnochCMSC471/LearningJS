// OR is ||, AND is &&, NOT is !
// Double NOT can be used to convert a value to a boolean -- essentially the same as casting to Boolean(value)

console.log('-----OR Operator-----')
// OR operator finds the first truthy value 
// OR is used in if/else statements most of the time
// OR has extended functionality in JavaScript - reads left to right, operands are converted to boolean, returns value of first "truthy" operand in origial form
// Essentially short-circuit evaluation - only processes what it needs and stops as soon as it can
// If all operands are falsey, return last operand in origial form
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log(undefined || null || 0 ); // 0 (all falsy, returns the last value)

console.log('\n-----AND Operator-----')
// Note: AND has higher precedence than OR so it will always be evaluated first
// AND returns the first falsey value
// Evaluates left from right, convert operands to boolean
// Return original value of first falsely operand
// If all operands are true, return value of last operand
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy, AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0
console.log(1 && 2 && null && 3); // null is returned because it is the first falsey value
console.log(1 && 2 && 3); // 3 is returned - it is the last value and all other values are truthy

console.log('\n-----NOT Operator-----')
console.log(!'Testing'); // String is not empty so it would normally return true.
console.log(!!'Testing'); // not(not) is true
console.log(!null); // Null returns false normally but inverse the result to get true
console.log(!!null); // inverse of true is false - return false now

// Tasks //
console.log('---Task 1---');
console.log(null || 2 || undefined); // Will output 2 - it is the first truthy value so it is returned

console.log('\n---Task 2---');
console.log(console.log(1) || 2 || console.log(3) ); // Result will be a single call of alert(1) which returns undefined and a single call of alert(2). 2 is truthy so it will stop evaulation of the OR statements, causing alert(3) to never be reached

console.log('\n---Task 3---');
console.log( 1 && null && 2 ); // null is output because it is the first falsey value in the list

console.log('\n---Task 4---');
console.log((console.log(1) && console.log(2))); // Results will be 1 and undefined in console 
// The first log(1) is called but returns undefined (falsey). log is then called on the result of the first log(1), printing 1 and undefined into the console

console.log('\n---Task 5---');
console.log( null || 2 && 3 || 4 );
// AND has higher precedence so this will be evaluated first and return 3 (AND finds first falsey value or returns last operand)
// OR finds either the first truthy value - null is not truthy so it moves to the next value of 3. 3 is truthy, resulting in 3 being returned and subsequently logged in console

console.log('\n---Task 6---');
let age = 90; 
let age2 = 91;

if((age >= 14) && (age <= 90))
{
    console.log("Age is within range.");
}

console.log('\n---Task 7---');
// Using NOT operator
if(!((age2 >= 14) && (age2 <= 90)))
{
    console.log("Age is NOT within range.");
}

if((age2 < 14) || (age2 > 90))
{
    console.log("Age is NOT within range.");
}

console.log('\n---Task 8---'); // Which whill execute?
console.log('See comments')
/*
if (-1 || 0) alert( 'first' ); // This should evaluate because -1 is truthy
if (-1 && 0) alert( 'second' ); // This will not evaluate - both -1 and 0 are not truthy
if (null || -1 && 1) alert( 'third' ); // Would evaluate -> -1 && 1 is truthy. Null || 1 returns 1, meaning that alert('third') will run. 
*/

console.log('\n---Task 9---');
let promptPlaceholder = 'Admin';
let passwordPlaceholder = 'TheMaster';

if(promptPlaceholder == 'Admin')
{
    if(passwordPlaceholder == 'TheMaster')
    {
        console.log('Welcome!');
    }

    else if((passwordPlaceholder == '') || (passwordPlaceholder == null))
    {
        console.log('Canceled');
    }

    else
    {
        console.log('Wrong Password');
    }
}

else if((promptPlaceholder == '') || (promptPlaceholder == null))
{
    console.log('Canceled');
}

else
{
    console.log("I don't know you!");
}

// Re-write using conditonal operator just for fun & practice
console.log('---Conditional Operator Practice---')
// This is so unintuitive it's not even funny but it's good practice for getting a thorough understanding of how the operator can be used

let msg = 
    (promptPlaceholder == "Admin") ? 
        ((passwordPlaceholder == 'TheMaster') ? 'Welcome!' : 
        ((passwordPlaceholder == '' || passwordPlaceholder == null)) ? 'Canceled' : 'Wrong Password') : 
    (promptPlaceholder == '' || promptPlaceholder == null) ? 'Canceled' : "I don't know you!"

console.log(msg);
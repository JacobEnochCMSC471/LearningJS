let x = 5;
console.log('---Switch with breaks---');
switch(x)
{
    case 1:
        console.log('Hello!');
        break;
    
    case 2:
        console.log('Goodbye!');
        break;
    
    case 3:
        console.log('Who are you?!');
        break;

    default:
        console.log('Good tidings traveller!');
}

// Breaks are extremely important in Switch statements - execution will continue to other cases without conditional checking without them
console.log('\n---Switch without breaks---')
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}

// Cases can be grouped together with the following syntax:
console.log('\n---Switch with grouped cases---')
a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
};

// Equality check for Switch statements use strict checking with === so type does matter!
console.log('\n---Switch Strict Checking Example---')
let arg = 0;

switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}

console.log('\n-----Tasks-----')
console.log('\n---Task 1---')
/* Convert into if/else statements

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

*/

let browser = "Firefox";

if(browser === "Edge")
{
    console.log("You've got the edge!");
}

else if((browser === "Chrome") || (browser === "Firefox") || (browser === "Safari") || (browser === "Opera"))
{
    console.log("Okay we suppport those browsers too");
}

else
{
    console.log("We hope that this page looks ok!");
}

console.log('\n---Task 2---')
/* Rewrite this using switch statement

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/

a = 2;

// Don't forget break statements!!
switch(a)
{
    case 0:
        console.log(0);
        break;
    
    case 1:
        console.log(1)
        break;

    case 2:
    case 3:
        console.log('2,3');
        break;
}

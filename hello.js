// JS Basics
console.log("I'm JavaScript!");

// Variables
let message = 'First Variable';

let message2;

let user = 'John', age = 12, msg = 'Goodbye!'

message2 = 'Second Variable';

console.log(message);
console.log(message2);
let full_msg = user + ' ' + age + ' ' + msg;

console.log(full_msg);

//-----Naming Conventions-----//
/*
Must only contain letters, digits, or symbols $ and _
First character cannot be a digit
let 1a = 'b' is not correct
let my-name; is also not correct
Camel-case typically used for variables with 1+ words/phrases
*/

// Constants cannot be reassigned
// typically named in all upper-case letters and underscores
const pi = 3.14159;
const PI_VAL = 3.14159;

let piSquared = pi * PI_VAL;

console.log(piSquared);

// Dates can be stored in a specific format - 'DD.MM.YYYY'
const BIRTHDAY = '18.11.1998';

// TASKS //
let admin, name;

name = 'John';
admin = name;

console.log(admin)


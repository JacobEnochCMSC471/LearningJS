// Most of the time conversions happen automatically
// Eg: Alert() will convert arguments into string, Math operations convert things to numbers.
// Most values can be converted directly into a string
console.log('---String Coversions---');
let convTestStr1 = true;
console.log(typeof convTestStr1);

let convTestStr2 = String(convTestStr1);
console.log(typeof convTestStr2);
console.log(typeof String('12'));

//-----Numeric Conversions-----//
// Most things are converted into numbers for mathematical expressions if possible
console.log('---Numerical Coversions---');
console.log('5' * '4');
console.log('5' + '4'); // Note this does not work for addition - assumes that you are concatenating the strings!
console.log('5'/'5');
console.log('5'-'1');

// Example of incorrect conversion
let incorrectStr = 'Yes!';
console.log(Number(incorrectStr)); // Converts to NaN because there is no numerical conversion to be done here
console.log(Number(null)); // Converts to 0
console.log(Number(undefined)); // Converts to NaN
console.log(Number(true)); // Converts to 1
console.log(Number(false)); // Converts to 0

//-----Boolean Conversion-----//
// This is where 'truthy' and 'falsy' values come into play
// Truthy values are usually for values that are not empty or are assigned in some way
// Falsy (Falsey) values are for things that are unassigned or empty
// Empty strings, null, undefined, NaN are all false when converted to Boolean
// Most other values are considered true
console.log('---Boolean Coversions---');
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

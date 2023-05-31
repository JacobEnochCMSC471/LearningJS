/* Eight basic data types in JS:
Number
BigInt
String
Boolean
null
undefined
objects
symbols
*/

//-----Numbers-----//
// Represents both integers and floating point numbers (decimals)
let n = 123456;
n = 12.3456;

// Infinity, -Infinity, NaN are special values for this type
console.log(1/0); // Div by 0
console.log(-1/0); // Div by 0
console.log('frick'/2); // Computational Error - usually mismatch between data types. NaN will propogate throughout any results
console.log(NaN + 1);

//-----BigInt-----//
// Numbers cannot handle values larger than 2^53 - 1 for both positive and negative values
// Number allows values to be stored up to 1.797 * 10^308 but with precision errors for values above 2^53-1
// BigInt allows arbitrary precision
let testNumber = 9007199254740991;
let bigTestNumber = 1234567890123456789012345678901234567890n; // n at end indicates BigInt

//----- String -----//
// Can be either single or double quotes
// Can also embed existing strings into new strings
let str1 = 'Testing';
let str2 = "my";
let str3 = `${str1} ${str2} JacaScript skills!`;

console.log(str3);

// Backticks `` are extended functionality quotes - vars and expressions can be embedded into strings by wrapping in ${} with backticks. See line 35 for example.
let extendedFunctionality = `Testing: ${1 + 5}`;
console.log(extendedFunctionality);

// There is no character type, only strings. They can be either length 0 or any length.

//-----Boolean-----//
// Pretty self-explainatory - can only be either true or false. 
// Gets a bit more complex with 'truthy' or 'falsy' data types. Expecting this to be covered later on.
let boolTest1 = true;
let boolTest2 = false; 

console.log(`${boolTest1}, ${boolTest2}`);

//-----Null Value-----//
// Represents nothing, empty, value unknown
let age = null; // Age is not currently known

//-----Undefined Value-----//
// Value is not assigned - used for declared but not assigned variables
let age2;
console.log(age2);
age = undefined;
console.log(age);

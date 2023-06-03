// Result of comparison operators is always boolean (T/F)
console.log("---Comparisons Examples---")
console.log(5 > 2);
console.log(5 == 2);
console.log(5 != 2);

// Strings are compared letter-by-letter -- either uses ASCII values or something very similar to it. 
// Once a greater/lesser value is found in one character a result will be returned immediately
// eg: "2" > "12" returns true because "2" is greater than "1" - no need to evaluate rest of string
console.log('---String Comparisons---');
console.log('Z' > 'A');
console.log('@' < 'A'); // Definitely looks like ASCII or some rough equivalent - @ = 40, A = 41 in ASCII (uses Unicode actually - ASCII is a subset of Unicode)
console.log('Bee' > 'Be') // Longer strings will always be greater than smaller strings

// As soon as a letter that is greater than the other is found, a result is computed and returned
console.log('Great' > 'Groan'); // 'o' is larger than 'e' at the third character so 'Groan' is automatically considered "greater"

console.log('---Different Types---');
// JS will convert numeric strings to Numbers before comparison automatically if numbers are present
console.log('56' > 102);
// Will also convert boolean to 1/0 automatically, as discussed earlier in type_conversion.js
console.log(true == 1);
console.log('true' == 1); // Will not convert "true" into number

// Strict Equality Rules
console.log('---Strict Equality---');
// Normal equality checks cannot differentiate between types (Number vs Boolean vs String)
console.log(0 == false); // true
console.log('' == false); // true because empty values (i.e. empty strings) are considered "falsy"

// Strict equality will not convert types before comparing - if A and B are different types then the result is immediately false
console.log(0 === false); // False - A and B are different types
console.log(true !== false); // Strict inequality operator - works same as normal inequality but doesn't convert types

// Uncompariable values (Undefined, null)
console.log('---Uncomparables---');
console.log(null == undefined); // True because they both essentially represent no vaule for a variable or item
console.log(null === undefined); // False because they are not technically the same type

// For math comparisons, null == 0 and undefined == NaN
// Undefined will always return false when used in comparisons because it is converted to NaN with numbers - always returns false
console.log('--Undefined in Number Comparisons---');
console.log(0 == undefined); 
console.log(0 > undefined); 
console.log(0 < undefined); 

console.log('---Strange Null Behavior with Numbers---')
console.log(null > 0); // False, null is converted to 0 and then compared. 0 is not > than 0
console.log(null == 0); // False, null can only be equal to undefined unstrictly
console.log(null >= 0); // True because comparisons convert null to numerical 0. Equality rules for null and undefined state that only these 2 can be equal to eachother.

console.log('---Tasks---')
5 > 4 // True
"apple" > "pineapple" // False, p > a when converted to unicode
"2" > "12" // True, both compared values are strings so no type conversions. First character for LHS > RHS so true is returned
undefined == null // True
undefined === null // False, technically not same type
null == "\n0\n" // False, newlines are stripped leaving '0' in string. Null is only ever equivalent to undefined unstrictly
null === +"\n0\n" // False, null and 0 are not the same type after newlines are stripped and 0 is converted to number using unary + operator

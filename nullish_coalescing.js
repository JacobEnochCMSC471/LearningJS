// Written as two question marks: ??
// A value is "defined" when it is neither null nor undefined

console.log('---Nullish Coalescing---')
let a = 2;
let b = null;

console.log(a ?? b); // If a is defined, return a. If a isn't defined, return b. 

// Can also be re-written as follows:
result = (a !== null && a !== undefined) ? a : b;
console.log(result);

// Common use-case is to provide a default value
console.log('\n---Use Cases---')
let user;
console.log(user ?? 'Anonymous'); // Will log 'Anonymous' since user is currently undefined

// User is now defined so it will not default to 'Anonymous'
user = 'Paul';
console.log(user ?? 'Anonymous');

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// A sequence of nullish coalescense operators will raturn the first value that is defined
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// The OR operator can be used in a similar way since it returns the first truthy (not defined) value found
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// Nullish operator differs slighty from OR - it returns the first defined value rather than the first truthy value
let height = 0;

console.log(height || 100); // 100 since 0 is (falsey). OR returns the first truthy value found (100)
console.log(height ?? 100); // 0 since 0 is a defined value, regardless of truthy/falsey status

// Best practice is to use parenthesis with this operator. It shares precedence with OR and cannot be used with OR and AND without parenthesis 
// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3;
console.log(x); // Logs 2 -> returns 2 for the AND operator and returns 2 for nullish operator.

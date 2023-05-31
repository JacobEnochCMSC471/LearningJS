// Standard operators - unary, binary, definition of operands (in 5 + 2, the numbers are the operands)
// Operators are the symbols themselves: + - / * ** etc
// Unary operators take 1 operand, binary operators take 2 operands 
console.log('---Operator Results---')
let x = 1;
let y = 5;
x = -x; 
console.log(`Example of unary operator: ${x}`); // Unary negation
console.log(`Example of binary operator: ${y + x}`); // Binary addition

//----- Math -----//
console.log('---Math Results---')
let a = 1 + 2;
let b = 3 + 4;
let c = 5 * 6;
let d = 14 / 7;
let e = 14 % 8; 
let f = 2**2;
console.log(`Results: ${a} ${b} ${c} ${d} ${e} ${f}`);

// Exponentiation also works for non-integer numbers too
console.log(27 ** (1/3)); // Cube root of 27 = 3

// Strings can be concatenated using binary + 
let test_str = 'Test' + 'ing' + 2; // the 2 is converted to a String automatically since there is a String in the operation
let test_str2 = 4 + 4 + '1'; // The 4 + 4 will be evaluated first, and then it will be converted to String and concatenated to be '81'
console.log(test_str);
console.log(test_str2);

//-----Numeric Conversion using unary+-----//
// Same as Number() but shorter - converting to Number from String happens very often so having a shorthand is very handy
console.log('---Unary Conversion Results---')
let strNum = '15';
let strBool = true;
console.log(typeof +strNum);
console.log(+strBool);

//-----In-place operators-----//
console.log('---In-place Operators---');
let g = 5;
g *= 2;
console.log(g);
g--;
console.log(g);

//----- TASKS -----//
// Task 1 //
let a1 = 2;

let x1 = 1 + (a1 *= 2);
// a1 = 4, x1 = 5

// Task 2 //
"" + 1 + 0 // 10
"" - 1 + 0 // 0 - 1 + 0 = -1
true + false // 1 + 0 = 1
6 / "3" // 2 - math operations try to convert String to Number 
"2" * "3" // 6 - math operations try to convert String to Number 
4 + 5 + "px" // 9px because first numbers are added before concatenated to String
"$" + 4 + 5 // $45 because String is first - everything else must be String after
"4" - 2 // 2 because 4 can be converted to Number safely
"4px" - 2 // NaN because the 4px cannot be converted to number
"  -9  " + 5 // -9   5 because of string concatenation
"  -9  " - 5  // -14 - the spaces are stripped and the -9 is converted
null + 1 // 1, null is 0 when converted
undefined + 1 // NaN because undefined is NaN when converted to Number
" \t \n" - 2 // After space and special character stripping, empty string is left. 0 - 2 = -2


// Task 3 //
/*

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

The error here is the a + b. Prompt converts any user input into a string automatically - it needs to be converted back to Number via either Number(val) or +val before adding for it to work correctly. 
*/


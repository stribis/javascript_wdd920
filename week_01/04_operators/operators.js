// There are many operators in Javascript that help us control and manipulate variables in many ways
// Here are the most important ones


// The assigment operator ( = )
var myNum = 24;
/*
  We use this operator to asign values to variables
*/

// The + or addition operator
// Can be used to add 2 numbers together or to concatenate 2 strings

// with number ( adds )
// with String ( Concatenation )

var myStr1 = "Hello";
var myStr2 = "World";
var separator = " ";

var conc = myStr1 + separator + myStr2;
// console.log(conc)

// Substraction Operator (-)  & (+ addition) (* multiplication) (/ division)

var someNumber = 15;

// console.log(myNum - someNumber) // -76 (Number)
// console.log(myNum * someNumber) // 2400 (Number)
// console.log(myNum / someNumber) // 0.24 (Number)
// console.log(24 * 32 - 200 + (3 * 4))

// > And < (outputs a true or false)
// In strings, number of characters will be compared
// In numbers, the values are compared

//console.log( 'foo' > 'fo' )

// Check if equal ( == )
// Compares the content (value) of the variable

// console.log('100' == 100)

// Check if STRICTLY Equal (===)
// Compares the content (value) AND the data type of the variable (BOTH) 
// console.log(someNumber === 100)


// console.log(someNumber <= 100)
// console.log(someNumber >= 100)

// Not equal to
// NOT operator (!)
// console.log( someNumber != 100) // ==
// console.log( someNumber !== 100) // ===

// AND and OR
// &&  and ||

// And
// console.log( 100 > 80 && 100 < 200) // true
// console.log( 100 > 80 && 300 < 200) // false

// // Or
// console.log( 100 > 80 || 100 < 200) // true
// console.log( 100 > 80 || 300 < 200) // true


// Modulus Operator || Modulo Operator
// %

console.log(6 / 2) // 3
console.log(7 / 2) // 3.5
// Get rest with modulo
console.log(6 % 2)
console.log(7 % 2)
console.log(2687 % 14)

// Check if number is even



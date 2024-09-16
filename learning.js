console.log("Hello, External")

let name = "John";
let surname = "Doe";
                                   
console.log(name);
console.log(surname);

let age = 11;
console.log(age); // outputs 11 to the console

age = 54;
console.log(age);

// const pi = 3.14;
// pi = 10;
                        // Will cause an error and stop running, nothing after this code is ran either
// console.log(pi);

console.log((3+2)-76*(1+1));
console.log(23+97);
console.log(1+2+3+4+5+6);
console.log((4+6+9)/77);

let a = 10
console.log(a);

console.log(9*a);

let b = 7*a
console.log(b)

let max = 57 
let actual = max - 13
let percent = actual/max

console.log(percent)

const string = "the revolution will not be televised.";
console.log(string);


// const badString1 = This is a test;
// const badString2 = 'This is a test;  These are bad string syntax you need the quotations
// const badString3 = This is a test';

const badString = string;
console.log(badString)

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// const names = "Chris";
// console.log(names);
// const greeting = `Hello, ${names}`;   Commented out due to duplicate const below causing error in code
// console.log(greeting);


const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

const greeting = "Hello"; 
const names = "Chris";

console.log(greeting + ", " + names);

console.log(`${greeting}, ${names} two.`);
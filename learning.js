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

const song = "Fight the youth";
const score = 9;
const highscore = 10;
const output = `I like the song ${song}. I give it a score of ${(score/highscore)*100}%.`

console.log(output);

const newline = `one day you finally knew
what you had to do, and began,`;

console.log(newline);


const newlinebreak = "one day you finally knew\nwhat you had to do, and began,";
console.log(newlinebreak);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

let text = "abcdefghijklmnopqrstuvwxyz";
let length = text.length;
console.log(length);

let text2 = "Hello World";
let char = text2.charAt(0)
console.log(char)

let text3 = "Hello World";
let char2 = text3[0];
console.log(char2)

let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7, 13);
console.log(part);

let part2 = text4.slice(7);
console.log(part2);

let str = "Apple, Banana, Kiwi";
let sub = str.substring(7, 13);
console.log(sub);

let str2 = "Apple, Banana, Kiwi";
let sub2 = str.substr(7);
console.log(sub2);

let upper = "Hello";
let lower = "World";

console.log(upper)

let upper2 = upper.toUpperCase();
console.log(upper2)

let lower2 = lower.toLowerCase();
console.log(lower);
console.log(lower2);

let into = "Hello";
let intro2 = "World";
let intro3 = into.concat(" ", intro2);
console.log(intro3);

let pad = "5";
let padded = pad.padStart(4,"0");
console.log(padded)

let pad2 = "5";
let padded2 = pad2.padEnd(4,"0");
console.log(padded2)

let reped = "text test, ";

let result = reped.repeat(2);
console.log(result)

let test = "Replace me please";
console.log(test);
let newTest = test.replace("me", "ME");
console.log(newTest);

let arrayTest = "1, 2, 3";
let tesxt = arrayTest.split(",");
console.log(tesxt);

let time = 18;

if (time < 10) {
    greet = "good morning";
} else if (time < 20) {
    greet = "good day";
} else {
    greet = "good evening"
}
console.log(greet)

const aa = 1;
const bb = 1;

result = aa + bb;
console.log(result);


let firstName = "Joseph"
let lastName = "Leathem"
let thisYear = 2024
let birthYear = 1998

let greetings = `Hello ${firstName} ${lastName}, it is year ${thisYear}, you are ${thisYear-birthYear} years old.`

console.log(greetings)
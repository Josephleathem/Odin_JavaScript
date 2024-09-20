// Let’s write some functions! Write these in the script tag of a skeleton HTML file. If you’ve forgotten how to set it up, review our instructions on how to run JavaScript code.

// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
function add7(n) {
    let total = n + 7;

    console.log(total)
}

add7(3);

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(num1, num2) {
    let product = num1 * num2;

    console.log(product)
}

multiply(6,6)

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or Both.

function capitalize(string) {
    let newString = string[0].toUpperCase() + string.slice(1).toLowerCase();

    console.log(newString)
}

capitalize("ThiS IS a Test")

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastLetter(string2) {
    let last = string2[string2.length - 1]

    console.log(last)
}

lastLetter("Joseph")


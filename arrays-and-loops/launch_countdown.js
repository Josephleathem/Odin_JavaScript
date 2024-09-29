// const output = document.querySelector('.output');
// output.textContent = "";

// Loop from 10 down to 0
//     initializer — let i = 10;
let i = 10;

do {
    
    const para = document.createElement('p');
    output.appendChild(para);

        if (i === 0) {
            // console.log('Blast off!'); //  If the number is 0, print "Blast off!" to the paragraph.
            para.textContent = 'Blast off!'
        } else if (i === 10) {
            // console.log('Countdown 10'); // If the number is 10, print "Countdown 10" to the paragraph.
            para.textContent = 'Countdown 10'
        }
        else {
            // console.log(i);
            para.textContent = i
        }

    i--;
} while (i >= 0);


// For each iteration, 
//     create a new paragraph and append it to the output <div>
//         which we've selected using const output = document.querySelector('.output');
//         In comments, we've provided you with three code lines that need to be used somewhere inside the loop:
//             const para = document.createElement('p'); — creates a new paragraph.
//             output.appendChild(para); — appends the paragraph to the output <div>.
//             para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.

// Different iteration numbers require different text to be put in the paragraph for that iteration 
//     (you'll need a conditional statement and multiple para.textContent = lines)


// let i = 10;
// while (i >= 0) {
//   const para = document.createElement('p');
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {                                         // This is the assignment solution mine has the same result
//     para.textContent = 'Blast off!';
//   } else {
//     para.textContent = i;
//   }
//   output.appendChild(para);
//   i--;
// }
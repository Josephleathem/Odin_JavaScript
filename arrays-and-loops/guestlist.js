//// Write a loop that will iterate through the people array. 
    // During each loop iteration, 
        // check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
        // If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
        // If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.

// We've already provided you with:
    // refused.textContent += — the beginnings of a line that will concatenate something at the end of refused.textContent.
    // admitted.textContent += — the beginnings of a line that will concatenate something at the end of admitted.textContent.


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';


for (let i = 0; i < people.length; i++) {
    if (String(people[i]) == 'Phil' || String(people[i]) == 'Lola') {
        if (String(people[i]) == 'Phil') {
            // console.log('PPPHHHIIILLL')
            refused.textContent += `${String(people[i])}`
        } else if (String(people[i]) == 'Lola') {
            // console.log('LLLooolllaaa')
            refused.textContent += `, ${String(people[i])}`
        }
    } else {
        // console.log(people[i])
        if (i === 0) {
            admitted.textContent += `${String(people[i])}`
            // console.log ("TEST")
        } else {
        admitted.textContent += `, ${String(people[i])}`
        }
    }
}




// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');

// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';

// for (const person of people) {                                             // Solution 
//   if (person === 'Phil' || person === 'Lola') {
//     refused.textContent += `${person}, `;
//   } else {
//     admitted.textContent += `${person}, `;
//   }
// }

// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
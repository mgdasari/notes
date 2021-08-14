/**
 * Program to check the variable is palindrome or not.
 */

let letter = [] //Defined empty stack

let word = 'racecar'

let rword =''

for(let i =0; i<word.length;i++){
    letter.push(word[i]);
}

for(let j =0; j<word.length;j++){
    rword += letter.pop()
    // console.log('rword ' + rword);

}

// console.log('rword final ' + rword);

if(rword == word){
    console.log('Letter is palindrome');
}
else
 console.log('Letter is not palindrome');
const arry = [1,2,34,4,5,2,1];
const sets = new Set(arry);

console.log(arry); //[ 1, 2, 34, 4, 5, 2, 1 ]
console.log(sets); //Set { 1, 2, 34, 4, 5 }  It removes the duplicate elements

const newSets = [...sets]

console.log(newSets) //[ 1, 2, 34, 4, 5 ]

sets.add(6);
sets.add('7');
console.log(sets);

sets.delete(34);
console.log(sets); //Set { 1, 2, 4, 5, 6, '7' }

sets.clear();
console.log(sets);

console.log(sets.has(4));

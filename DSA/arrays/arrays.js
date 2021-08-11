//  8 must know methods of arrays

/**
 * 1) Filter methods:
 * -------------------
 * 
 * These method help to filter the given array as per condition without changing the actual array
 */

const items = [
    {name:'bike',price:100},
    {name:'tv',price:50},
    {name:'ac',price:30},
    {name:'fan',price:20},
    {name:'fridge',price:110},
    {name:'wahingmachine',price:120},
]

const filteredArray = items.filter((item)=>{
    return item.price <=100; //It return true or false based on condition of each item of array 
})

console.log(filteredArray);
console.log(items); //Actual array remain unchanged.

/**
 * 2) Maps:
 * ---------
 * Map is used to convert one array into another array. But it looks different.Suppose you have array of object and you want array of only one attribute. Then you use array.map for this requirement.
 */


const nameArray = items.map((item)=>{
    return item.name
}) //Here you want array of names

console.log(nameArray); //Array of names
console.log(items);//Actual item array does not changes.

/**
 * 3) Find:
 * -----------
 * Find method help to find the object in the array.
 */

const foundArray = items.find((item)=>{
    return item.name == 'bike'
}) 

console.log(foundArray);

/**
 * 4) Foreach method
 * ---------------------
 * Foreach method use to iterate array with each require element.
 * 
 */

items.forEach((item)=>{
    console.log(item.name); //It will print all the name attribute of array items.
});

/**
 * 5) Some:
 * -----------
 * 
 * some method help to check condition in the array is true for atleast one elment and  return boolean value (true or false)
 */

const hasInexpensiveItems = items.some((item)=>{
    return item.price <= 100 ; // some methods check whether in items array and price is less   than 100 or not. If yes it return true or return false.
});

console.log(hasInexpensiveItems);

/**
 * 6) every:
 * --------
 * 
 * Every method help to check the condition against all the element in the array and return boolean value true if condition is true for all the element otherwise return false.
 */

const hasInexpensiveItems1 = items.every((item)=>{
    return item.price <=100
});

console.log(hasInexpensiveItems1); //In these every method check whether all the element in the array are less then equal to 100 

/**
 * 7) Reduce:
 * ---------
 * Reduce method is used to find sum of all the element values in the arrays.
 * 
 */

const total = items.reduce((currentTotal,item)=>{
    return item.price+currentTotal
},0) 
/**
It basically take callback and position from where the summation needs to be started.
In callback it take currentTotal and item object, return currentTotal.
*/


/**
 * 8) Includes:
 * -------------
 * 
 * Include method help to check whether give input is present in the array or not.
 */

const arrayItem =[1,2,3,4]

console.log(arrayItem.includes(2)) //It gives true.


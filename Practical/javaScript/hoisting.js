/**
 * variable hoisting
 */

console.log(a); //undefined.
    a=1;
    var a;


/**
 * regular function hoisting
 */

hoisted()

function hoisted(){
    console.log('hoisted function');
}

/**
 * let and const hoisting
 */

console.log(x)
var x=10;

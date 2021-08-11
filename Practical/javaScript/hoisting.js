/**
 * variable hoisting
 */

console.log(a); //undefined.
    a=1;
    var a;


/**
 * regular function/function declaration hoisting.
 */

hoisted()

function hoisted(){
    console.log('hoisted function');
}

/**
 * let and const hoisting
 */

let x;
console.log(x);

/**
 * function expression.
 * 
 * In function expression. Function is not hoisted as like function declartion.
 */

get();
var get = function(){
    console.log('mukund');
}
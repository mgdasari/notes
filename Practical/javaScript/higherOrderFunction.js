/**
 * function taking function as argument
 * 
 */

function higherOrder(fn){
    fn()
}

function print(){console.log('heloo there i am passed function')}

higherOrder(print);


/**
 * 
 * @returns A function.
 */

function x(){
    return function (x){
        console.log(x)
    }
}

x()('hello there i am inside function')
 


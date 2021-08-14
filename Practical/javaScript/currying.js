function add1(x,y){
    return x+y
}

console.log(add1(2,4));


/**
 * 
 * Currying is a technic which transform function of n argument i.e add1 into n function with one or less argument.
 */



function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  console.log(add(3)(4));


  /**example 2 */

  function multiply(a,b){
    return a*b;
  }

  function Currying(fn){
      return function(a){
          return function(b){
              return fn(a,b)
          }
      }
  }


var curriedMultiply = Currying(multiply);

console.log(multiply(2,3));
console.log(curriedMultiply(2)(3));


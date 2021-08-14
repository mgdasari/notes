//Gobal scope.

var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}

function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}

console.log(sendMessage2()); 

/**
 * local and function scope:
 * -----------------------------
 */

 function awesomeFunction(){
    var a = 2;
  
    var multiplyBy2 = function(){
      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
    multiplyBy2(2)
  }

  awesomeFunction();//4

  //console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
 // multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope


  /**
   * Blocked scope:
   * --------------
   */

   {
    let x = 45;
  }
  
  //console.log(x); // Gives reference error since x cannot be accessed outside of the block
  
  for(let i=0; i<2; i++){
    // do something
  }
  
  //console.log(i); 

  /**
   * scope chain:
   * ------------
   */

   var y = 24;

   function favFunction(){
     var x = 667;
     var anotherFavFunction = function(){
       console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
     }
   
     var yetAnotherFavFunction = function(){
       console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
     }

     var yetYetAnotherFavFunction = function(){
         console.log(z); //It search for scope uptill global scope and throw the refference error.
     }
   
     anotherFavFunction();
     yetAnotherFavFunction();
     yetYetAnotherFavFunction();
   }
   
   
   favFunction();
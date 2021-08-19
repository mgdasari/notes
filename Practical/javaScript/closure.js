/**
 *Lexical scoping is explained below. The variable defined outside scope are available inside the scope.You dont have to pass explicilty. 
 */

let i = 2;

const test = () =>{
    console.log(i);  //2
}

test()

/**
 * Let understand how child function can access the variable and argument of the outer function.
 */

function outerFunction(b){
    let x=10;
    function innerFunction(){
        console.log(x);   //10
        console.log(b);    //5
    }
    return innerFunction;
}

outerFunction(5)();

/**
 * childfunction can access the variable defined in outer scope even when outer funtion is executed completly.
 */

function outerFunction1(){
    let parentVariable = 1000;
    function childfunction1(){
        console.log(parentVariable);
    }
    return childfunction1
}

let executable = outerFunction1();
/**
 * Here outer funtion is executed and return child function.And child function still access the outer variable.
 */
executable()

/**
 * CLosure keep the state of the outer variable between the multiple call.Innr function dose not contain separate copy it just keep the refference of the outer variable.
 */

 function ParentFunction() {

    var parentVariable = 60;

    function ChildFunction() {
        return parentVariable += 1;
    }

    return ChildFunction;
}

var executeChild = ParentFunction();
console.log(executeChild()); //61
console.log(executeChild()); //62
console.log(executeChild()); //63
console.log(executeChild()); //64


/**
 *Here privateCOunter and changeBy function are private Its not retruned (publically available) 
 */

 var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  })();

counter.value(); // 0
counter.increment();
counter.increment();
counter.value(); // 2
counter.decrement();
counter.value(); // 1


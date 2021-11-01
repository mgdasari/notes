/**
 * call is used to invoke the function and allow you t0 pass argument one by one comma separated.
 * Apply is also some wat same but you can pass the argument as Array.
 * Bind retunr a function. It can be used for curry the function.
 */


//call
 var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
 var person2 = {firstName: 'Kelly', lastName: 'King'};
 
 function say(greeting) {
     console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
 }
 
 say.call(person1, 'Hello'); // Hello Jon Kuperman
 say.call(person2, 'Hello'); // Hello Kelly King

 //Apply..

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

//Bind

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King
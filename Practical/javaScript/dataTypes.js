//Primitive Data type:

var x='mukund';
var y=x;

var y='dasari'
console.log(x); //mukund
console.log(y); //dasari


//Non Primitive Data type

var obj1 = {
    x:  43,
    y:  "Hello world!",
    z: function(){
       return this.x;
    }
 }
 
 var obj2 = obj1;
 
 console.log(obj1);
 console.log(obj2);
 
 obj2.x=100
 console.log(obj1.x); //100
 console.log(obj2.x); //100
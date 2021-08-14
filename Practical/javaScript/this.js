function display(){
    console.log(this) // Here Display function is called y global object so in console we get global object.
}

//display()

let user ={
    name:'mukund',
    getUserdetails(){
        console.log(this); //Here the function is called by the object user so it console user object
    }
}


//user.getUserdetails();
var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
       
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress(); //her we will get error as ob2 dose not  have address attribute.
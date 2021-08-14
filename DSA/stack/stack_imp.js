/**
 * Note: In javascript array already support stack.BUt we have also implemented stack by using object as below.
 * 
 * 
 */

var Stack = function(){
    this.count = 0;
    this.storage ={};

    this.push = function(value){
        this.storage[this.count]=value;
        this.count ++
        //console.log('storage ' + JSON.stringify(this.storage));
        //console.log('count ' + this.count);
    }

    this.pop = function(){
        if(this.count == 0){
            return undefined
        }
         
        this.count-- ; //As you have to remove the last object, so u decrement the count and use it for deletion
        var result = this.storage[this.count];
        
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count
    }

    this.peek = function(){
        return this.storage[this.count -1] // As last object needs to be displayed so decremented the count and used for display.
    }


}

var mystack = new Stack();

mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.push(4);
mystack.push(5);
console.log(mystack.size());

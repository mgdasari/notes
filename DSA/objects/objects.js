let obj = {
    name:'crystal',
    age:30,
    location:'ulhasnagr',
    blogs:['why mac and cheese rule','10 things to make marite'],
    login(){
        console.log('user logged in ');
    },
    logout(){
        console.log('user logged out')
    },
    logBlogs(){
        //console.log(blogs); //This will give u error so u need to use this ;
        console.log(this.blogs);
        //**Here 'this' reffer to  the object in which this function is defined */
    }
}

console.log(obj);
console.log(obj.name);

/**Below way is used when you key in varibale */

const key ='location';
const key1='age'
console.log(obj[key]);
console.log(obj[key1]);

/**Adding methods to obj */

obj.login();
obj.logout();

/**This 
 * -----
 * If you are using 'this' outside an object then it refferes to th global window object
 * 
 * If you are using this inside the object then this 'this' refferes to the object in which it is used.
 * 
*/
obj.logBlogs();  //here this refferes to obj.

console.log(this); // here this refferes to window objects.
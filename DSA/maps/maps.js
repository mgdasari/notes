const name={
    1:'name',
    2:'mukund'
}

console.log(Object.keys(name))  //[ '1', '2' ]

const mymap = new Map ;
mymap.set(1,'mukund');
mymap.set([1,2,3],'dasari');
console.log(mymap)   //Map { 1 => 'mukund', [ 1, 2, 3 ] => 'dasari' }


//for of loops:

for (let keys of mymap.keys()){

    console.log('keys are ' +  keys);
}

for (const values of mymap.values()) {
    console.log('values are ' + values);
}

for (const [key,values] of mymap) {

    console.log('key is ' + key +' values is ' + values);
}

//foreach 

mymap.forEach((values,key)=>{
    console.log('values ' + values);
    console.log('keys ' + key);
});
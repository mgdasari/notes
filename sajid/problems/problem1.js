let employee=[
    {name:'carry',age:34,joined:'asdsd'},
    {name:'harry',age:36,joined:'asdsd'},
    {name:'marry',age:35,joined:'asdsd'},
    {name:'barry',age:30,joined:'asdsd'},
]

employee.sort((a,b)=>{
    let fa = a.name;
    let fb = b.name;
    console.log('fa ' + fa);
    console.log('fb ' + fb);
    if(fa > fb) return 1;
    // if(fa < fb ) return -1;
    // return 0
})

console.log(employee);
// employee.forEach((x)=>{
//     console.log(x)
// })
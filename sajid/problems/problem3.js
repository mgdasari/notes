let s ='nouman'

let set1=new Set(s);
let newArryset = [...set1]
console.log(newArryset.sort((a,b)=>{
    if(b>a) return 1;
}));

console.log(newArryset.sort());
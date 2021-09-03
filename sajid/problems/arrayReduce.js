let arry =[1,2,3,4,5,6]

let sum = arry.reduce((currentTotal,items)=>{
    return items+currentTotal
})

console.log(sum)

//map example

let newMap = new Map;

newMap.set(1,'mukund');
newMap.set(2,'dasari');
console.log(newMap);
for (const iterator of newMap) {
    console.log(iterator);
}
const _ =require('lodash');

let words=['sky', 'wood', 'forest', 'falcon', 
'pear', 'ocean', 'universe'];

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstword = _.first(words)
let lastword = _.last(words)

console.log(firstword + ' '+ lastword)

console.log(_.nth(words,3));
console.log(_.nth(words,-3));

console.log(_.chunk(words,2));
console.log(_.chunk(words,3));

console.log(_.slice(nums,0,7));

console.log(_.random(10));
console.log(_.random(5,10));

let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach((e)=>{
    if(_.isNumber(e)){
        console.log('number ' + e);
    }
    if(_.isString(e)){
        console.log('string ' + e);
    }
    if(_.isObject(e)){
        console.log('Object ' + JSON.stringify(e));
    }
    if(_.isArray(e)){
        console.log('Array ' + JSON.stringify(e));
    }
})

let words1 = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom"]

console.log('words starting with t');

words1.forEach((e)=>{
    if(_.startsWith(e,'t')){
        console.log(e)
    }
    else if(_.endsWith(e,'k')){
        console.log(e)
    }
})
/**
 * https://leetcode.com/problems/concatenation-of-array/
 */
var getConcatenation = function(num) {
    let doubledNum=num.concat(num);
    return doubledNum;
};

let num =[1,2,1];
console.log(getConcatenation(num));

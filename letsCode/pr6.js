/**
 * https://leetcode.com/problems/shuffle-the-array/
 */

var shuffle= function(nums,n){
    let array = [];
    for (let i = 0; i < (nums.length / 2); i++) {
        array.push(nums[i], nums[i + n]);
    }
  return array
}


let nums= [2,5,1,3,4,7]
let n=3;
console.log(shuffle(nums,n));

    // console.log(array);
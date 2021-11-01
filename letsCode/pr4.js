/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */

var runningSum = function (nums) {
  let newNum = [];

  for (let i = 0; i < num.length; i++) {
    let newArry = num.slice(0, i + 1);
    newNum.push(
      newArry.reduce((intial, total) => {
        return intial + total;
      })
    );
  }
  return newNum;
};

let num = [1, 2, 3, 4, 5];
runningSum(num);


/**
 * 
 https://leetcode.com/problems/build-array-from-permutation/
 */


var buildArray = function (num) {
  let ans = [];
  for (let i = 0; i < num.length; i++) {
    ans.push(num[num[i]]);
  }

  return ans;
};

let num = [0, 2, 1, 5, 3, 4];
buildArray(num);
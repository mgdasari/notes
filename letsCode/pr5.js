/**
 * https://leetcode.com/problems/richest-customer-wealth/
 */

var maximumWealth = function (num) {
  let newNum = [];

  for (let i = 0; i < num.length; i++) {
    let newArry = num[i];
    newNum.push(
      newArry.reduce((intial, total) => {
        return intial + total;
      })
    );
  }
  return ( newNum.sort((a, b) => {
    return a - b;
  })[num.length - 1]);
};

let num = [
  [1, 5],
  [7, 3],
  [3, 5],
];

maximumWealth(num);

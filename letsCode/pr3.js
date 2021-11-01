/**
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */

var finalValueAfterOperations = function (operations) {
  let sum = 0;
  operations.forEach((y) => {
    if (y == "--X") --sum;
    if (y == "X++") sum++;
    if (y == "++X") ++sum;
    if (y == "X--") sum--;
  });
  return sum;
};
let operations = ["--X", "X++", "X++", "X--"];
finalValueAfterOperations(operations);

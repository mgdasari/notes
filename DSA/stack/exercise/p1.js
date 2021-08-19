/**
 * Maximum Nesting Depth of the Parenthe
 */

var maxDepth = function (s, num) {
  let arry = [...s];
  let par1 = arry.filter((item) => {
    return item == "(";
  });
  let par2 = arry.filter((item) => {
    return item == ")";
  });
  if (par1.length != par2.length) {
    console.log("Given expression is not a vps");
  } else if (par1.length == 0 && par2.length == 0) {
    return 0;
  } else {
    let openCounter = 0;
    let closeCounter = 0;
    let result = 0;
    for (let i = 0; (i = arry.length); i++) {
      let removedItem = arry.pop();
      if (removedItem == "(") {
        openCounter++;
      } else if (removedItem == ")") {
        closeCounter++;
      } else if (removedItem == num) {
        break;
      }
    }
    if (openCounter > closeCounter) {
      result = openCounter - closeCounter;
    } else {
      result = closeCounter - openCounter;
    }
    return result;
  }
};

let input = "(1+(2*3)+((8)/4))+1";
let num = 8;
console.log("max depth is  " + maxDepth(input, num));

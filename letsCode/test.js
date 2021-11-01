/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */

 let candies = [2,3,5,1,3];
 // let candies = [4, 2, 1, 1, 2];
 let extraCandies = 3;
 let output = [];
 let total = [];
 
 for (let i = 0; i < candies.length; i++) {
   let sum = candies[i] + extraCandies;
   if (i === 0) {
     total.push(sum);
     output.push(true);
   } else {
     let res = total.some((item) => {
       console.log("item " + item);
       return sum > item;
     });
     if (res) {
       output.push(true);
       total.push(sum);
     } else {
       output.push(false);
       total.push(sum);
     }
   }
 }
 
 console.log("total " + total);
 console.log("output " + output);
 
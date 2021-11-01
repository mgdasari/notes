/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */
 let candies = [2,3,5,1,3];
 let extraCandies=3
 let maxCandy = Math.max(...candies);
 let x=0;
 candies.map((candy) =>candy + extraCandies >= x);
 console.log(x);
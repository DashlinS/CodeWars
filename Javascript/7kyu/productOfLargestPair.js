/*
Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

*/


function maxProduct(a) {
  a = Array.from(a);
  let m = Math.max(...a);
  a.splice(a.indexOf(m), 1);
  let n = Math.max(...a);
  return m * n;
}

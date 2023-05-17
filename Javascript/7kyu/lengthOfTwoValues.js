/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/

function alternate(n, fV, sV){
  let i = 0;
  let arr = [];
  while(i < n){
    arr.push(fV, sV);
    i++;
  }
  return arr.splice(0, n)
}

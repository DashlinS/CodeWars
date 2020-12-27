/*
Another Kata testing an whether all elements of an array are square, although this time the array can be a multidemtional array with any number of dimensions.

Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

Your function should return true if all elements are square numbers and false if not.

An entirely empty array should return undefined.

You can assume that all array elements will be positive integers..
*/

var isSquare = function(arr){
if(arr.length < 1) return undefined
  arr = flat(arr)
  return arr.every(num => num === true)
}
let flat = arr => arr.reduce((a,b)=>a.concat(Array.isArray(b)?flat(b):Math.sqrt(b)%1==0),[])

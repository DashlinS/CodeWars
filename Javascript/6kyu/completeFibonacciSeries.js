/*
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4); // should return  [0,1,1,2]
fibonacci(-1); // should return []
*/

function fibonacci(n) {
  if(n <= 0){
    return []
  }
  
  let num1 = 0,
      num2 = 1,
      result,
      count = 2;
  let arr = [num1, num2]

  while(count < n){
    result = num1 + num2;
    num1 = num2;
    num2 = result;
    arr.push(result)
    count++;
  }
  
  return arr
}

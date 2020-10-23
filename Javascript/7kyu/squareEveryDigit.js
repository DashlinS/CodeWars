/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

/* Original */
function squareDigits(num){
  //may the code be with you
  return parseInt(num.toString().split('').map(x => x * x).join(''))
}

/* Changing to make it one line of code*/
var squareDigits = num => parseInt(num.toString().split('').map(x => x * x).join(''))

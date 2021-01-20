/*
Your task is to write function factorial

https://en.wikipedia.org/wiki/Factorial

*/

function factorial(n){
  if(n === 1 || n === 0) return 1
  else
    return n * factorial(n - 1)
}

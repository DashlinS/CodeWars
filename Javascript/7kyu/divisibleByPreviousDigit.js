/*
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]
* Remember 0 is evenly divisible by all integers but not the other way around *
*/

function divisibleByLast(n) {
 let arr = [false]
 let num = n.toString().split('')
   for(let i = 0; i < num.length-1; i++){
    let next = num[i + 1]
    arr.push(next % num[i] === 0)
   }
  return arr
}

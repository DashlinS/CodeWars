/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
*/


function sumOfDifferences(arr) {
  let answerArr = []
  if(arr.length <= 1) return 0
  let newArr = arr.sort((a,b) => a - b)
  for(let i = 0; i < newArr.length-1; i++){
    let nextEle = newArr[i + 1]
    answerArr.push(nextEle - newArr[i])
  }
  return answerArr.reduce((a,b) => a + b, 0)
}

//One line
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}

/*
There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/

//long solution
function solve(stones) {
  let arr = stones.split('')
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i + 1]){
      count++
    }
  }
  return count
}

//one line
function solve(stones) {
  return stones.split('').reduce((counter, item, index) => stones[index] === stones[index + 1] ? counter+1 : counter, 0)
}

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/* First Try */
function findShort(s){
  let split = s.split(' ').sort(function(a, b){
     return a.length - b.length
  });
  return split[0].length
}

/* Another way - shorter */
var findShort = s => Math.min(...s.split(' ').map(a => a.length))

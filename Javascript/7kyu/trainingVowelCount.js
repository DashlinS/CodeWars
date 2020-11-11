/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//first go
function getCount(str) {
  let vowelsCount = str.match(/[aeiou]/g)
  if(vowelsCount === null){
    return 0;
  } 
  return vowelsCount.length
}

//Refactor
function getCount(str) {
  let vowelsCount = str.match(/[aeiou]/g)
  return vowelsCount ? vowelsCount.length : 0;
}

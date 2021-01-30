/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

*/

function alphabetPosition(text) {
//  first thing i want to do is have a variable which holds the alphabet
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// create an array that our answer gets put into
  let numAlpha = [];
// change the text to lowercase
  let lowerText = text.toLowerCase();
//  iterate through the string
  for(let i = 0; i < lowerText.length; i++){
  //  for each value check the index
    let index = alphabet.indexOf(lowerText[i])
    // if index doesnt exist in our string return -1 then continue so its skipped
    if(index === -1) 
      continue;
    // take our variable for our index and add 1
    else {
      numAlpha.push(index + 1)
    }
    // push the answer to our array and then join the array
    }
    return numAlpha.join(' ')
}

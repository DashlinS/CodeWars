/*
Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

function removeConsecutiveDuplicates(s){
 let arr = s.split(' ')
  let newArray = []
    for ( let i = 0; i < arr.length; i++) {
         let element = arr[i]
         if ( element !== arr[i+1]){
           newArray.push(arr[i])
         }
    }
       return newArray.join(' ')
}

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

/* Map method */
function invert(array) {
   return array.map(item => item * -1);
}

/*For loop */
function invert(array) {
   for(let i = 0; i < array.length; i++){
     array[i] = array[i] * -1;
   }
  return array
}

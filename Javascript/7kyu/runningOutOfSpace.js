/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

*/

function spacey(array){
  let str = '',
      newArr = []
  for(const item of array){
    str += item
    newArr.push(str)
  }
  return newArr
}

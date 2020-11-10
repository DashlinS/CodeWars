//Write function avg which calculates average of numbers in given list. 

function find_average(array) {
  return array.reduce((a,b) => a + b, 0) / array.length
}

//One line
let find_average = array => array.reduce((a,b) => a + b / array.length, 0)

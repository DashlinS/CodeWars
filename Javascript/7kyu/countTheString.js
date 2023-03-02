/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

*/

function nbDig(n, d) {
  let initial = 0;
  let currentArr = [];
  let newArr = []

  while(initial <= n){
    let newNum = Math.pow(initial, 2);
    currentArr.push(newNum.toString());
    initial++;
  }
    let knownArr = currentArr.filter(elements => {
      return elements.includes(d)  
    });
  
    knownArr.forEach(function (ele, index){
      return newArr.push(ele.split(d).length-1)
    });
  
  return newArr.reduce((a, v) => a + v, 0)
}

//refactor
function nbDig(n, d) {
  var string = '';
    for(var i = 0; i <= n; i++){
      string += Math.pow(i, 2);
    }
  return string.split(d).length-1
}

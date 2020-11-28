/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let splits = [...str].map(x=>Number(x))
  let arrE = [];
  let arrO = [];
  
  
  splits.forEach(element => element % 2 === 0 ? arrE.push(element) : arrO.push(element))
   let even = arrE.reduce((a,b) => a + b, 0)
   let odd = arrO.reduce((a,b) => a + b, 0)
    
   if(even > odd){
     return 'Even is greater than Odd'
   }
  else if(even < odd){
     return 'Odd is greater than Even'
   }
  else {
    return 'Even and Odd are the same'
  }
}

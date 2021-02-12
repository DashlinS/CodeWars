/*
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
  // ...prep p = number
  // R = return even for even numbers and odd for odd numbers
  // E = example if number is 2, you would return even. if number is 3, you would return odd
  // p = use an if else statment,
  //if number is even,
  //use modulus to get the remainder.
  //if remainder is 0 then it would be even,
  //then you return even as a string.
  //use an else statment,
  //then you return odd as a string.
  if (number % 2 === 0) return 'Even'
    else return 'Odd'
}

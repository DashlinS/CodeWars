/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

//Easy to do, but learned the radix system. That the binary numeral system is base 2 radix! So I input that in my String to recieve the correct result.

function addBinary(a,b) {
  sum = a + b;
  return sum.toString(2);
}

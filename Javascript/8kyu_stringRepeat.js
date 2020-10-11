//Write a function called repeatString which repeats the given string src exactly count times.

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//Used str.repeat() function

function repeatStr (n, s) {
  
  var str = s;
  result = str.repeat(n);
  return result;
  
}

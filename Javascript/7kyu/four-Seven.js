/*
Four Seven
Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

Good Luck!
*/

function fourSeven(n){
  let four = 4;
  let seven = 7
  let answer = n + 7 - 4 === seven;
  let answer2 = n + 4 - 7 === four
  while(answer === true){
    return seven
  }
  while(answer2 === true){
    return four
  }
    return 0
}

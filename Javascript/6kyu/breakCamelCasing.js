/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

// complete the function
function solution(string) {
 return string.replace(/([a-z])([A-Z])/g, '$1 $2')   
}

//One Line
let solution = (string) => string.replace(/([a-z])([A-Z])/g, '$1 $2')   


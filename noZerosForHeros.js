/*
Description:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

*/

function noBoringZeros(n) {
  let str = n.toString()
  let newStr = str
  for(let i = 0; i < str.length; i++){
    if(newStr.endsWith('0')){
     newStr = newStr.substring(0, newStr.length - 1)
    }
  }
  return Number(newStr)
}

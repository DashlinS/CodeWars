/*
Description:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadAge, sonAge) {
  let beginnerAge = dadAge - sonAge
  let beginnerSonAge = 0
  while(beginnerSonAge * 2 !== beginnerAge){
    beginnerAge++ 
    beginnerSonAge++
  }
  return Math.abs(sonAge - beginnerSonAge)
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld)
}

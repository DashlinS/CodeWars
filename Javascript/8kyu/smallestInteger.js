/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
  let smallest = args.sort((a,b)=> a-b);
  return smallest[0];
  }
}

/*Another way to do this*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

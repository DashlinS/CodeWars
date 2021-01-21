/*
Description:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

my_list = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = arr => arr.filter((item, index) => index % 2 === 0)

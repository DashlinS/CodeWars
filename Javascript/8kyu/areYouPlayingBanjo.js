/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
*/

const areYouPlayingBanjo = name => name.match(/^[r]/gi) ? name + " plays banjo" : name + " does not play banjo"

const areYouPlayingBanjo = name => name[0].includes('R') || name[0].includes('r') ? `${name}` + " plays banjo" : `${name}` + " does not play banjo"

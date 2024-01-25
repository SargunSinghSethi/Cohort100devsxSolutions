/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  reversedString = str.split("").reverse().join("");
  return reversedString === str;
}

module.exports = isPalindrome;

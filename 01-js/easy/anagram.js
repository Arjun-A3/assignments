/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  if(str1.length!=str2.length)
    return false;

  let chars = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for(const char of str1)
    chars[char] = (chars[char] || 0) + 1;
  for(const char of str2)
    chars[char] = (chars[char] || 0) - 1;

    for(const key in chars){
      if(chars[key]!==0)
      return false;
    }
    return true;
  }


module.exports = isAnagram;

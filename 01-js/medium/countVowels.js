/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // let c = str.match(/[aeiou]/gi).length;
    // return c;
    let vowels = [a,e,i,o,u];
    let n =str.length;
    let count =0;
    for(let i of str){
      if(vowels.includes(i))
      count++;
    }
    return count;
}

module.exports = countVowels;
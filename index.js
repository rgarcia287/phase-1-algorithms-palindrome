function isPalindrome(word) {
  // Write your algorithm here
  if (word === reverseString(word)) {
    return true
  } else {
    return false
  }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  The function should take a word
    Compare the normal word with the word reversed:
    (need a function to reverse the word)
    Not equal in comparison returns a false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

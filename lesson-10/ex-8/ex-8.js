//Is this word a palindrome?

function isAPalindrome(word) {
  let isPalindrome = false;
  let wordArray = Array.from(word);
  let reverse = ""

  for (let index = wordArray.length - 1; index >= 0; index--) {
   reverse = reverse + wordArray[index];
  }
          if (reverse == word) {
            console.log("Is a palindrome");
          }
          
           else {
           console.log("Is not a palindrome")

} 

  //return isPalindrome;
}

isAPalindrome("civic"); //True
isAPalindrome("palindrome"); //False
isAPalindrome("rotator"); //True
isAPalindrome("word"); //False
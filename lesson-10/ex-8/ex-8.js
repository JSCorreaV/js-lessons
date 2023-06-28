//Is this word a palindrome?

function isAPalindrome(word) {
  let isPalindrome = true;
  let wordArray = [];
  [...word].forEach((caracter) => wordArray.push(caracter));
  let j = wordArray.length - 1;
  for (let i = 0; i < wordArray.length / 2; i++) {
    if (wordArray[i] != wordArray[j]) {
      isPalindrome = false;
    }
    j--;
  }
  return isPalindrome;
}

console.log(isAPalindrome("civic")); //True
console.log(isAPalindrome("civica")); //False
console.log(isAPalindrome("civvic")); //True
isAPalindrome("palindrome"); //False
isAPalindrome("rotator"); //True
isAPalindrome("word"); //False

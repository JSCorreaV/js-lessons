//Is this word a palindrome?

function isAPalindrome(word) {
  let isPalindrome = false;
  let arrWord = word.split("");
  let newWord = arrWord.reverse();
  for(i=0; i < arrWord.length; i++){
    let j = arrWord.length -1 ;
    while (j) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
      j--;
      if(arrWord[i] == newWord[j]){
        isPalindrome = true;
      }
        else isPalindrome = false;
    }
  }
  console.log(word, isPalindrome);
  return isPalindrome;
}

isAPalindrome("civic"); //True
isAPalindrome("palindrome"); //False
isAPalindrome("rotator"); //True
isAPalindrome("word"); //False
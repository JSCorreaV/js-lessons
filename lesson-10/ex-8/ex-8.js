//Is this word a palindrome? *word that reads the same backward or forward* 
/*read the word forward and save the word in an array wordForward
then read the word backward and save the word in another array wordBackwar
if wordForward == wordBackward
then isPalindrome = true, 
otherwise false, 
*/

function isAPalindrome(word) {
  let isPalindrome = false;
  let wordArray = Array.from(word);
  let reverse = "";
 
    for (let index = wordArray.length -1; index >= 0; index--) {
      reverse = reverse + wordArray[index];  
    }
      if (reverse== word){
      console.log("Is a palindrome");
      }
        else {
        console.log("Is not a palindrome");
        }
  }
    
  /*return isPalindrome;*/

isAPalindrome("civic"); //True
isAPalindrome("palindrome"); //False
isAPalindrome("rotator"); //True
isAPalindrome("word"); //False*/

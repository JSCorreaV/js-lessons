//Are two lists equals?

function checkLists(listOne, listTwo) {
  let equalLists = true;
  if (listOne.length != listTwo.length) {
    equalLists = false;
  } else {
    for (let index = 0; index < listOne.length; index++) {
      if (listOne[index] != listTwo[index]) {
        equalLists = false;
        break;
      }
    }
  }
  return equalLists;
}

console.log(checkLists(["a", "b", "c"], ["a", "b"])); //false
console.log(checkLists(["a", "b", "c"], ["c", "b", "c"])); //false
console.log(checkLists(["a", "b", "c"], ["a", "b", "c"])); //True
console.log(checkLists(["a", "c", "b"], ["a", "b", "c"])); //False
console.log(checkLists(["a", "b", "c", "d"], ["a", "b", "c"])); //False
console.log(checkLists(["a", "b", "c"], ["a", "b", "c", "e"])); //False

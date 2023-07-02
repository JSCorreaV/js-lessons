//Are two lists equals?

function checkLists(listOne, listTwo) {
  let equalList = true
  if (listOne.length != listTwo.length){
    return false;
  }
  for (let i=0;i<listOne.length;i++){
      if(listOne[i]!=listTwo[i]){
        return false;
        break;
      } 
    } 
  return true;
}

console.log(checkLists(["a", "b", "c"], ["a", "b", "c"])); //True
console.log(checkLists(["a", "c", "b"], ["a", "b", "c"])); //False
console.log(checkLists(["a", "b", "c", "d"], ["a", "b", "c"])); //False
console.log(checkLists(["a", "b", "c"], ["a", "b", "c", "e"])); //False

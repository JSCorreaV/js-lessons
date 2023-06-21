//Are two lists equals?

function checkLists(listOne, listTwo) {
  let equalLists = false;
  return equalLists;
}

checkLists(["a", "b", "c"], ["a", "b", "c"]); //True
checkLists(["a", "c", "b"], ["a", "b", "c"]); //False
checkLists(["a", "b", "c", "d"], ["a", "b", "c"]); //False
checkLists(["a", "b", "c"], ["a", "b", "c", "e"]); //False

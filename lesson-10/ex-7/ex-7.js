//Are two lists equals?

function checkLists(listOne, listTwo) {
    let equalLists = true;

    if (listOne.length == listTwo.length) {
        for (let index = 0; index < listOne.length; index++) {
            if (listOne[index] != listTwo[index]){
                equalLists = false;
                break;
            }
        }
    }
    else{
        equalLists = false
    }
    
    //return equalLists;
    console.log (equalLists)
  }
  
  checkLists(["a", "b", "c"], ["a", "b", "c"]); //True
  checkLists(["a", "c", "b"], ["a", "b", "c"]); //False
  checkLists(["a", "b", "c", "d"], ["a", "b", "c"]); //False
  checkLists(["a", "b", "c"], ["a", "b", "c", "e"]); //False
  
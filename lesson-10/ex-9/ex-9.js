//create an array with all odd numbers

function findAllOddNumbers(numberList) {
  oddList = [];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] %2 !==0){
      const element = oddList[index];
    }
    
    
  }
  
  return oddList;
}

findAllOddNumbers([4, 5, 6, 7, 8, 9]); // result: [5,7,9]
findAllOddNumbers([1, 2, 3, 4, 5]); // result: [1,3,5]
findAllOddNumbers([1, 3, 5]); // result: [1,3,5]
findAllOddNumbers([2, 4, 6, 8, 0]); //result: [])

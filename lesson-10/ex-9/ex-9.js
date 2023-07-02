//create an array with all odd numbers

/*function findAllOddNumbers(numberList) {
  let oddList = [];  
  for (let i = 0; i < numberList.length; i++){
    if (i%2){
      oddList.push(numberList[i]);
      console.log(oddList);
    } 
  }
  console.log(oddList);
  return oddList;
}

findAllOddNumbers([4, 5, 6, 7, 8, 9]); // result: [5,7,9]
findAllOddNumbers([1, 2, 3, 4, 5]); // result: [1,3,5]
findAllOddNumbers([1, 3, 5]); // result: [1,3,5]
findAllOddNumbers([2, 4, 6, 8, 0]); //result: [])

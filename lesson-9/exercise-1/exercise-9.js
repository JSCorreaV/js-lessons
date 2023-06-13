/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.

*/

function findLargest(number1, number2, number3){
    let number1=document.getElementsByName("number1").value;
    let number2=document.getElementsByName("number2").value;
    let number3=document.getElementsByName("number3").value;
    let result;

    if (number1>number2 && number1>number3){
        result = number1;
    }
    else if (number2>number1 && number2>number3){
        result = number2;
    }
    else (number3>number1 && number3>number2)
       result =  number3;
    
}
  
    
    


    //print in html the biggest

/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.

*/

function findLargest(){
    let n1=document.getElementById("number1").value;
    let n2=document.getElementById("number2").value;
    let n3=document.getElementById("number3").value;
    let result;

    if (number1>number2 && number1>number3){
       result = n1;
    }
    else if (number2>number1 && number2>number3){
        result = n2;
    }
    else if (number3>number1 && number3>number2) {
        result = n3;
    }
    console.log(result);
}
  
    
    


    //print in html the biggest

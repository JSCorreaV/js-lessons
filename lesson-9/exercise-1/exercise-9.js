/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.



*/

    //print in html the biggest


let num1 = 10; // x
let num2 = 15; // y
let num3 = 20; // z

function findLargest () {
    if(num1 > num2 && num1 > num3) console.log("num1 = "+num1+" is the greatest");
    else if(num3 > num1 && num3 > num2) console.log("num3 = "+num3+" is the greatest");
    else console.log("Y = "+num2+" is the greatest");

}

findLargest ()



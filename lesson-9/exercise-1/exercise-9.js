/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.

*/
let result;

function findLargest(){
    first = 463456433;
    second =4445364;
    third = 8;

    if(first>second && first>third){
        result = first;
    } 
    else if (second>third){
        result = second;
    } 
    else {
        result = third;
    }


    /*if(first>second && first>third){
        result = first;
    } else if (second>first && second>third){
        result = second;
    } else if (third>first && third>second){
        result = third;
    }*/
    console.log(result);

    //print in html the biggest
}

findLargest()
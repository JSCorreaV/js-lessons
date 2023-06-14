/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.

*/
let result;

function findLargest(){
    lista = [5,7,3];
    result = lista.sort();
    console.log(result[2]);
}

findLargest();
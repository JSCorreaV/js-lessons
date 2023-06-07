/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.

*/

function findLargest(){
    first = Number(document.getElementById("firstNumber").value);
    second = Number(document.getElementById("secondNumber").value);
    third= Number(document.getElementById("thirdNumber").value);

    if (first >= second && first >= third){
            document.getElementById("number").value = "First Number";
            document.getElementById("numberValue").value = first;
    }else if (third > second){
            document.getElementById("number").value = "Third Number";
            document.getElementById("numberValue").value = third;
    } else {
        document.getElementById("number").value = "Second Number";
        document.getElementById("numberValue").value = second;
    }
}
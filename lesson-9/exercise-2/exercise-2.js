/*
Function `findTriangleType()` finds the type of the triangle (Equilateral, Isosceles, Scalene)
 for given side values by using “==” and “&&” operator in JavaScript.
*/

function findTriangleType(){
    first = Number(document.getElementById("firstNumber").value);
    second = Number(document.getElementById("secondNumber").value);
    third= Number(document.getElementById("thirdNumber").value);

    if (first == second && first == third){
            document.getElementById("triangleType").value = "equilateral";
    }else if (third == second || second == third || first == third){
            document.getElementById("triangleType").value = "Isosceles";
    } else {
        document.getElementById("triangleType").value = "Scalene";
    }
}
/*
Function `findTriangleType()` finds the type of the triangle (Equilateral, Isosceles, Scalene)
 for given side values by using “==” and “&&” operator in JavaScript.
*/
let result;

function findTriangleType(){
    first = 8;
    second =8;
    third = 8;

    if(first == second && second ==third){
        result= "equilateral";
    } else if (first == second || second == third || first == third){
        result= "Isoceles";    
    } else {
        result = "Scalene";
    }
    console.log(result);
}

findTriangleType()
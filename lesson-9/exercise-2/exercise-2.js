/*
Function `findTriangleType()` finds the type of the triangle (Equilateral, Isosceles, Scalene)
 for given side values by using “==” and “&&” operator in JavaScript.
*/

let side1 = 60
let side2 = 60
let side3 = 60

function findTriangleType(side1, side2, side3){
    if (side1 == side2 && side2 == side3 && side1 == side3){
        console.log ("The triangle is equilateral");
    }

    else if (side1 == side2 && side2 != side3 && side1 != side3){
        console.log ("The triangle is isosceles");
    }
    
    else (side1 != side2 && side2 != side3 && side1 != side3); {
        console.log ("The triangle is scalene");
    }
}

findTriangleType ()

    //print in html the type of triangle




/*
Function `findTriangleType()` finds the type of the triangle (Equilateral, Isosceles, Scalene)
 for given side values by using “==” and “&&” operator in JavaScript.
*/

function findTriangleType(a,b,c){
        if (a==b && b==c){
            return "Equilateral";
        }
        else if (a==b || a==c || b==c){
            return "Isosceles";
        }
        else {
            return "Scalene";
        }
        }

    //print in html the type of triangle

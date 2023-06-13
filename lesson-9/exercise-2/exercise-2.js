/*
Function `findTriangleType()` finds the type of the triangle (Equilateral, Isosceles, Scalene)
 for given side values by using “==” and “&&” operator in JavaScript.
*/

function findTriangleType(size1, size2, size3){
    let size1=document.getElementsByName("size1").value;
    let size2=document.getElementsByName("size2").value;
    let size3=document.getElementsByName("size3").value;

    if (size1==size2 && size2==size3) {
         console.log ("this is a equilateral triangle");
    }
    else if (size1==size2 || size2==size3 || size1==size3)
         console.log("this is a isosceles triangle");
    
    else { (console.log("this is a scalene triangle"));   
}}

    //print in html the type of triangle

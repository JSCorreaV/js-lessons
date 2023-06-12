/*
Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.

*/



function findLargest(a,b,c){
    if (a>=b && a>=c){
        return a;
    }
    if (b>=c && b>=a){
        return b;
    }
    if (c>=a && c>=b){
        return c;
    }

    //print in html the biggest
}
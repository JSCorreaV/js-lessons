/*
Function `findDaysInMonth()` finds the number of days in a given month of a year.

-If month is outside the range of 1 and 12 print “Invalid month”.
-If month is equal to 2 ie, "February might have 28 or 29 days". 
-Else if month is equal to 4, 6, 9 or 11 print “30 days”.
-Else print “31 days”.
*/

function findDaysInMonth(a){
    if (a<1 || a>=12){
        return "Invalid month";
    }
    else if (a==2){
        return "February might have 28 or 29 days";
    }
    else if (a==4 || a==6 || a==9 || a==11){
        return "30 days";
    }
    else{
        return "31 days";
    }

    //print the result in the html page
}
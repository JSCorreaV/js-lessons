/*
Function `findDaysInMonth()` finds the number of days in a given month of a year.

-If month is outside the range of 1 and 12 print “Invalid month”.
-If month is equal to 2 ie, "February might have 28 or 29 days". 
-Else if month is equal to 4, 6, 9 or 11 print “30 days”.
-Else print “31 days”.
*/
let result;

<<<<<<< HEAD
function findDaysInMonth(month){
    if (month<1 || month>12){
        return "Invalid month";
    }
    else if (month==2){
        return "February might have 28 or 29 days";
    }
    else if (month==4 || month==6 || month==9 || month==11){
        return "30 days";
    }
    else{
        return "31 days";
    }

    //print the result in the html page
}
=======
function findDaysInMonth(){
    month = 0;
    if (month > 12 || month < 1) {
        result="not a month number";
    }
    else if(month==2) {
        result="february";
    } 
    else result="not february";
    
    console.log(result);
}

findDaysInMonth();
>>>>>>> main

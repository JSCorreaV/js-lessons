/*
Function `findDaysInMonth()` finds the number of days in a given month of a year.

-If month is outside the range of 1 and 12 print “Invalid month”.
-If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
-Else if month is equal to 4, 6, 9 or 11 print “30 days”.
-Else print “31 days”.
*/

function findDaysInMonth(){
    month = Number(document.getElementById("monthNumber").value);
    if (month < 1 || month > 12){
        document.getElementById("monthDays").value = "not a valid month number";
    }
    else if (month == 2){
        document.getElementById("monthDays").value = `feb 28-29`;
    }
    else if (month % 2 == 0){
        days = 30;
        document.getElementById("monthDays").value = `The month has ${days} days`;
    }
    else {
        days = 31;
        document.getElementById("monthDays").value = `The month has ${days} days`;

    }


    //print the result in the html
}
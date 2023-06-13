/*
Function `findDaysInMonth()` finds the number of days in a given month of a year.

-If month is outside the range of 1 and 12 print “Invalid month”.
-If month is equal to 2 ie, "February might have 28 or 29 days". 
-Else if month is equal to 4, 6, 9 or 11 print “30 days”.
-Else print “31 days”.
*/

function findDaysInMonth(month){
       
    if (!(month >= 1 && age <= 12)) {
            console.log ("Invalid month");
            return "Invalid month"
        }

        else if (month = 2) {
        console.log ("February might have 28 or 29 days");
        return "February might have 28 or 29 days";
    }

         else (month = 1 || 6 || 9 || 11) 
         console.log ("30 days");
         return "30 days";

         else (month != 1 || 6 || 9 || 11);
         console.log ("31 days");
         return "31 days";

         //visual studio no me deja o me bloquea este else
         
}
         
    
findDaysInMonth()

    //print the result in the html

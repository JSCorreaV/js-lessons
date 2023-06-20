//Print the next time within secons given a time

//EX: 8:34:57 => 8:34:58
//EX: 8:34:58 => 8:34:59
//EX: 8:34:59 => 8:35:00
//EX: 8:59:59 => 9:00:00
//EX: 23:59:59 => 00:00:00

function nextSecondTime(hour, minute, second){
    second++;
    if(second>59){
        second=0;
        minute++;
     if(minute>59){
        minute=0;
        hour++;
       if(hour>23){
        hour=0;
        }
      } 
    }
    console.log(`Time is: ${hour}: ${minute}: ${second}`)
}

nextSecondTime(8,53,43)


























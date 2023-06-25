/*given a list of numbers print: 
the sum
the media
the highest
the lowest

    let highest = Number.MIN_VALUE;
    let lowest = Number.MAX_VALUE;
    
*/

function listOfNumbers(){
    list = [5,3,5,6,70,8,4];
    let sum=0;
    let media=0;
    for (let i = 0; i < list.length; i++){
        sum=sum+list[i]; /*sum+=list[i];*/
    }
    media = sum / list.length;
    sortedList = list.sort(function(a, b){return a-b});
    highest = sortedList[list.length - 1];
    lowest = sortedList[0];
    console.log(sum, media, highest, lowest);
}
listOfNumbers()

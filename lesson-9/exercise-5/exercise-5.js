/*given a list of numbers print: 
the sum
the media
the highest
the lowest
*/

// pendiente revisar el tema del null para max y min.

function listOfNumbers(){
    let sum=0;
    list = [5,3,5,6,70,8,4];
     for (let index =0; index < list.length; index ++){  
        sum +=list[index];
        media= sum / list.length;
        highest = Math.max.apply(null,list);
        lowest = Math.min.apply(null,list);
    } 
    console.log(`the sum is: ${sum}, the media is : ${media}, the highest is ${highest}, the lowest is ${lowest}`);    
}
listOfNumbers()
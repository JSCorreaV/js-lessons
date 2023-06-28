/*given a list of numbers print: 
the sum
the media
the highest
the lowest
*/

let result = "vacio";

function listOfNumbers(list) {
  let sum = 0;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let media;
  let index = 0;

  for (index; index < list.length; index++) {
    sum += list[index];

    if (min > list [index]) {
      min = list[index];
    }

    if (max < list[index]) {
      max = list[index];
    } 
  }
  media = sum / list.length;
  return `The results are: SUM = ${sum} min = ${min} max = ${max} media = ${media}`; 
  //return "The results are: SUM = " + sum + " MEDIA = " + media + " MIN = " + min + " MAX = " + max;
}
console.log("++++++++++++++++ este es vacio"); 
console.log(result);
result = listOfNumbers([100, -2092, 3, 4, 5]);
console.log("---------- este es la suma");
console.log(result);

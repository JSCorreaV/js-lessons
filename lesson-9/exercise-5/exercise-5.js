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

  for (let index = 0; index < list.length; index++) {
    sum += list[index];

    if (min > list[index]) {
      min = list[index];
    }

    if (max < list[index]) {
      max = list[index];
    }
  }
  media = sum / list.length;
  return `The results are: SUM = ${sum} MEDIA = ${media} MIN = ${min} MAX = ${max}`;
  //return "The results are: SUM = " + sum + " MEDIA = " + media + " MIN = " + min + " MAX = " + max;
}
console.log(result);
result = listOfNumbers([5, -33, 5, 6, 700, 8, 4, 54654, 76, 2, 5435]);
console.log(result);

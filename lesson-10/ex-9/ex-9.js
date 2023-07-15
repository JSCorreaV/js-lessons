//create an array with all odd numbers
/*convertir numberList en un array,
luego buscar en ese array numero par,
si es un numero par, entonces guardar ese num en un nuevo array oddList
si no es un numero par, entonces seguir buscando 
*/

function findAllOddNumbers(numberList) {
  oddList = [];
  //aqui apuntamos al contador, varie desde 0 hasta la ultima posicion de memoria  //
  /*  for (let index = 0; index < numberList.length; index++) {
      if (numberList[index] %2 !== 0){
            oddList.push(numberList[index]);
       }
    }
  //console.log(oddList);*/
//aqui no hay contadores ni indices, solamente lealo en orden, no apunto a ningun lugar solo trabajo lo que tengo en este momento//
  for (const index of numberList){
      if (index %2 !== 0){
      oddList.push(index);
      }     
      }
  return oddList;
  } 



console.log(findAllOddNumbers([4, 5, 6, 7, 8, 9])); // result: [5,7,9]
console.log(findAllOddNumbers([1, 2, 3, 4, 5])); // result: [1,3,5]
console.log(findAllOddNumbers([1, 3, 5])); // result: [1,3,5]
console.log(findAllOddNumbers([2, 4, 6, 8, 0])); //result: [])

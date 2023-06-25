//Count all vowels in a given text

<<<<<<< HEAD

function vowelCounter(text){
    [...text].forEach((s)=>console.log(s)); //this is a way of printing all caracters in a string, you have to find a way to store all the string values in an array
}


vowelCounter("fkdlsajñriuweoñre")
=======
/*function vowelCounter(cadenaDeTexto) {
  counter = 0;
  lista = [];
  [...cadenaDeTexto].forEach((s) => lista.push(s)); //Op1
  //lista = cadenaDeTexto.split(" "); OP2


  lista.forEach(letra => {
    if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"
    ) {
        counter++;
    }        
  });

    /*for (const letra of lista) {
        if (
            letra == "a" ||
            letra == "e" ||
            letra == "i" ||
            letra == "o" ||
            letra == "u"
        ) {
            counter++;
        }    
    }*/

/*for (let index = 0; index < lista.length; index++) {
    if (
      lista[index] == "a" ||
      lista[index] == "e" ||
      lista[index] == "i" ||
      lista[index] == "o" ||
      lista[index] == "u"
    ) {
      counter++;
    }
  }

  console.log(`Counter = ${counter}`);
}

vowelCounter("abce");*/

function vowelCounter(cadenaDeTexto) {
  [...cadenaDeTexto].forEach((letra) => console.log(letra)); //this is a way of printing all caracters in a string, you have to find a way to store all the string values in an array
}

vowelCounter("abce");
>>>>>>> main

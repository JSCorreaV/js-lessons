//find all primes from 0 to limit

function primeList(limit) {
  primes = [];
        for (let i=0; i<= limit.length; i++){
             if( i %2 !== 0) {
                primes.push(i);
                console.log(i);
            }
        }
  }


console.log(primeList(2)); //result: [0,1,2]
console.log(primeList(5)); //result: [0,1,2,5]
console.log(primeList(10)); //result: [0,1,2,3,5,7]

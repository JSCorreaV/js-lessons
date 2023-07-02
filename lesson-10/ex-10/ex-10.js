//find all primes from 0 to limit

function primeList(limit) {
  primes = [];
  
  function isPrime(num) {
    if (num <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    // Check if num is divisible by any number from 2 to half of num
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return false; // If num is divisible by any number, it is not prime
      }
    }
  
    return true;
  }
  console.log(isPrime(10));

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
}

console.log(primeList(2)); //result: [0,1,2]
console.log(primeList(5)); //result: [0,1,2,5]
//console.log(primeList(10)); //result: [0,1,2,3,5,7]

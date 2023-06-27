// Implement a loop that prints prime numbers to the console

function printPrimeNumbers(x) {
    if (isFinite(x)) {  //Error handling
      for (j = 2; j <= x; j++){
        let bool = isPrime(j);  //calling the function to determine if the number is prime or not
        while (bool){
          console.log(j);
          break;
        }
      }
    } else console.log("Error! Not a number");
  }
  
  //Function to determine if the number is prime
  function isPrime(n) {
    if (n == 0 || n == 1) { //Corner cases
      return false;
    }
    if (n == 2) { //Exception (Base) case according to the logic used for determination
      return true;
    }
    for (i = 2; i < n; i++){ //Determine prime numbers greater than 2
      if (n % i == 0) {
        return false;
      } else return true;
    }
  }

  printPrimeNumbers(19);  //2,3,5 .... 19
  printPrimeNumbers();  //Error! Not a number
  console.log(isPrime(1));  //false
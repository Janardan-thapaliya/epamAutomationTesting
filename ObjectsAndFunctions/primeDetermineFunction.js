//Function to determine if number is prime or not
function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        } else return true;
    }
}

function showResult(n) {  //function to show the result of isPrime() in console
    if (isFinite(n)) {    //Exception handling to not get undefined if no paramater is passed or Non number is passed
        let result = isPrime(n);
        if (result) {
            console.log("The number " + n + " is Prime.");
        } else console.log("The number " + n + " is not Prime.");
    } else console.log("Error. Number not provided for evaluation.")
}

showResult(5); //The number 5 is Prime.
showResult(); //Error. Number not provided for evaluation.
// Implement a loop that prints odd numbers to the console

function printOddNumbers(x) {
    if (isFinite(x)) {   //Error handling to check if the provided parameter is a number
      for (i = 1; i <= x; i++){ 
        while (i % 2 != 0) {   //If remainder when divided by 2, then odd
          console.log(i);   //Print odd numbers
          break;
        }
      }
    } else console.log("Error! Not a number");
}

printOddNumbers(19);  //1,3,5 ... 19
printOddNumbers(); //Error! Not a number
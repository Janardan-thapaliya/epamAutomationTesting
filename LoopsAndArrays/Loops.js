// Implement a loop that will print the number 'a' until it is less than 10

function loopPrinter(a) {
    if (a >= 10){    //Provided case for stopping
        for (a; a >= 10; a--){
            console.log(a);
        };
    } else console.log("Too small number");
    return 0;
}

loopPrinter(19); //19 down to 10 in console
loopPrinter(9);  //Too small number
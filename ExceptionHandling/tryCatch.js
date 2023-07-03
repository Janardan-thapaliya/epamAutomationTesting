//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.

try{
    console.log(a);  //Automatically throws "ReferenceError: Cannot access 'a' before initialization"
    let a = 3;
    throw new Error(`let must be declared before use`); //Never reaches this part, so this error is never shown
} catch(error) {
    console.log("Error: " + error.message);  //Error: Cannot access 'a' before initialization
}



//Catching ReferenceError and logging manual message

try {
    console.log(a);
    let a = 3;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Error: let must be declared before use");
    }
}



//Use try catch construction to display the error 'cannot be divided by zero' when running 1/0

try {
    let divide = 1/0;  //Not a real error in JavaScript, shows infinity
    if (!(isFinite(divide))) {   //Condition check to see if it is not a number
        throw new Error("Cannot be divided by zero"); 
    }
} catch (error) {
    console.log("Error: " + error.message); //Error: Cannot be divided by zero
}
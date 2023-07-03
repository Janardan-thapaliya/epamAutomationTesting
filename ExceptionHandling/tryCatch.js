

try{
    console.log(a);
    let a = 3;
    throw new ReferenceError("let must be declared before use");
}
catch(error){
    console.log("Error: " + error.message);
}
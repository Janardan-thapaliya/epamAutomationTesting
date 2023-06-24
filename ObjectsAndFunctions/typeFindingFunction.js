//Function to find type of provided parameter(argument) and print the type in console
function showType(arg) {
    let type = typeof(arg);
    console.log(type);
} 

showType(5);  //Number
showType("Hello!");  //String
showType();  //Undefined
showType(null); //object
showType(true); //Boolean
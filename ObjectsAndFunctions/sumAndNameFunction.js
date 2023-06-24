//Function for adding apples and pears accepted by warehouse

console.log("Sum of fruits in warehouse:\n");
function warehouseSum (apples = 0, pears = 0) { //default value to avoid getting undefined (NaN, arithmetic operation of undefined)
    return apples + pears;
}

let sum = warehouseSum(5,6);  //test calling
console.log(sum); //11
console.log(warehouseSum()); //0



//Function for name and default value

console.log("\n Name and default response:\n");
function payment(name = "there is no such name") { //name will take default value if function doesn't receive parameter
    console.log("Hello, " + name);
}

payment();   //Hello, there is no such name
payment("John"); //Hello, John
let car = {  //Object creation
  colour: "Black",
  power(){   //method creation
    console.log("The power of engine is 150 bhp.");
  }
};
car.name = "Volkswagen";  //property creation and assignment
car.colour = "green";  //property recreation and assignment

console.log("You have the car: " + car.names + ". The colour of car is " + car.colour + ". "); //string concatenation
car.power(); //method call

delete car.name;   //property deletion

let deletionCheck = ('name' in car);  //in provides true if property exists in object, otherwise false
console.log(deletionCheck); //false (Successfully deleted)
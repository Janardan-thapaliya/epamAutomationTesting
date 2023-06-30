//Given an array of car manufacturers, convert the array to a string and back to an array

let cars = ["Volkswagen", "Mercedes", "Ford", "Tesla", "Toyota"];
console.log(cars);

let strCars = String(cars);  
console.log(strCars);  //Volkswagen,Mercedes,Ford,Tesla,Toyota

let arrCars = strCars.split(',');  //If split is not used, the result would be array with single element (whole string)
console.log(arrCars);  //same as array 'cars'
//Filter array [1,6,7,8,3,4,5,6] by value> 3

let unFilteredArr = [1,6,7,8,3,4,5,6];
let filteredArr = [];

unFilteredArr.forEach(element => {  //Using each element to compare and add to new array
    if (element > 3){
        filteredArr.push(element);
    }
});
console.log(filteredArr);  //[6, 7, 8, 4, 5, 6]

console.log("\nAfter using filter method\n"); //line separator

let filterMethArr = unFilteredArr.filter(num => num > 3);   //Using filter method to compare and add to new array
console.log(filterMethArr);  //[6, 7, 8, 4, 5, 6]
//Convert numeric array to Boolean

let numArr = [7, 1, 4, 0, 3, 0];
let boolArr = [];

numArr.forEach(element => {
    let bool = Boolean(element);  //Convert each element to boolean type
    boolArr.push(bool);  //Add the converted element to new array 'boolArr'
});

console.log(boolArr);  //[true, true, true, false, true, false]
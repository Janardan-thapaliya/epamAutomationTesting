//Sort the array [1,6,7,8,3,4,5,6] in descending order

let unOrderedArr = [1,6,7,8,3,4,5,6];
unOrderedArr.sort(function(a, b){return b-a});  //b-a for descending order, a-b would be for acsending

console.log(unOrderedArr);  //[8, 7, 6, 6, 5, 4, 3, 1]
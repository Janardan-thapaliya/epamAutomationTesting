//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function arrayPrint(array, number){
    let index = array.findIndex(match => match == number);
    console.log(index);
}

arrayPrint([6,7,8,9,10], 9); //3
arrayPrint([6,7,8,9,10], 6); //0
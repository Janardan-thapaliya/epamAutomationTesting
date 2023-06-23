//Explicit data type conversion

let num = 12;
let str = "Jack";
let str2 = "1234";
let strEmpty = "";
let bool = false;
let nul = null;
let undef;

console.log("Original types and their values:\n");

console.log("num: ", typeof(num), "\tvalue: ", num);
console.log("str: ", typeof(str), "\tvalue: ", str);
console.log("str2: ", typeof(str2), "\tvalue: ", str2);
console.log("bool: ", typeof(bool), "\tvalue: ", bool);
console.log("nul: ", typeof(nul), "\tvalue: ", nul); //Article for self-study claimed that null being presented as object is error in programming language
console.log("undef: ", typeof(undef), "\tvalue: ", undef);

//Conversion of number to other types
console.log("\nNumber to other types:\n");
let numToStr = String(num);
let numToBool = Boolean(num);

console.log("numToStr: ", typeof(numToStr), "\tvalue: ", numToStr);
console.log("numToBool: ", typeof(numToBool), "\tvalue: ", numToBool); //0 is false and other numbers are true


//Conversion of string to other types
console.log("\nString to other types:\n");
let strToNum = Number(str); //If the string is other character, the conversion will fail and give NaN
let str2ToNum = Number(str2); //If the string is number instead of other characters, the conversion will succeed
let strToBool = Boolean(str);
let strEmptyToBool = Boolean(strEmpty);

console.log("strToNum: ", typeof(strToNum), "\tvalue: ", strToNum);
console.log("str2ToNum: ", typeof(str2ToNum), "\tvalue: ", str2ToNum);
console.log("strToBool: ", typeof(strToBool), "\tvalue: ", strToBool); //If the string has any character (even "0"), boolean will be true
console.log("strEmptyToBool: ", typeof(strEmptyToBool), "\tvalue: ", strEmptyToBool); // If string is empty, boolean will be false


//Conversion of boolean to other types
console.log("\nBoolean to other types:\n");
let boolToStr = String(bool);
let boolToNum = Number(bool); //True = 1 and False = 0

console.log("boolToStr: ", typeof(boolToStr), "\tvalue: ", boolToStr);
console.log("boolToNum: ", typeof(boolToNum), "\tvalue: ", boolToNum);
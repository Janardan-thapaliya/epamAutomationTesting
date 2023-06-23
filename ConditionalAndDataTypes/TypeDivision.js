//Division of various data types

let str = "John"; //String cannot be used for division
let num = 12;
let bool = true; //true = 1 and false = 0 (in number type)
let nul = null; //null = 0 (in number type)
let undef;

//Division of string and number
let strNum = str / num;
console.log('String / number:', strNum);

//Division of number and boolean
let numBool =num / bool;
console.log('Number / boolean:', numBool);

//Showing automatic type conversion of JavaScript (Assuming that default for number data type is integer)
console.log('Boolean / number:', bool / num);

//Division of string and boolean
let strbool = str / bool;
console.log('String / boolean:', strbool);

//Division of null with other primitive data types
console.log('String / null:', str / nul);
console.log('Number / null:', num / nul);
console.log('Boolean / null:', bool / nul); //if boolean is false (0), value will be NaN
console.log('Undefined / null:', undef / nul);
console.log('Null / null:', nul / nul);

//Since Null = 0, boolean and number dividing it will give 0 (null, string and undefined in denominator giver NaN)
console.log('Null / number:', nul / num);
console.log('Null / string:', nul / str);
console.log('Null / boolean:', nul / bool); //if boolean is false (0), value will be Indeterminate (NaN)
console.log('Null / undefined:', nul / undef);


//Division of undefined with other data types
console.log('String / undefined:', str / undef);  
console.log('Number / undefined:', num / undef); //All division operation with undefined gives Not-a-Number (NaN)
console.log('Boolean / undefined:', bool / undef);
console.log('Undefined / undefined:', undef / undef);
console.log('Undefined / number:', undef / num);

//Division of string and string
console.log('String / string:', str / str);

//Division of number and number
console.log('number / number:', num / num);

//Division of boolean and boolean
console.log('Boolean / boolean:', bool / bool); //if boolean is false (0), value will be Indeterminate (NaN)
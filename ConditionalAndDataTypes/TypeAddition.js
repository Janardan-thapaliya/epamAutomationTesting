//Addition of various data types

let str = "John";
let num = 12;
let bool = true; //true = 1 and false = 0 (in number type)
let nul = null; //null = 0 (in number type)
let undef;

//Addition of string and number
let strNum = str + num;
console.log('String + number:', strNum);

//Showing that during string concatenation (with other data types including itself), order matters
let numStr = num + str;
console.log('number + string:', numStr);

//Addition of number and boolean
let numBool =num + bool;
console.log('Number + boolean:', numBool);

//Addition of string and boolean
let strbool = str + bool;
console.log('String + boolean:', strbool);

//Addition of null with other primitive data types
console.log('String + null:', str + nul);
console.log('Number + null:', num + nul);
console.log('Boolean + null:', bool + nul);
console.log('Undefined + null:', undef + nul);
console.log('Null + null:', nul + nul);

//Addition of undef with other data types
console.log('String + undefined:', str + undef);  //string can be concatenated with anything (probably xD)
console.log('Number + undefined:', num + undef); //every other arithmetic operation with undefined gives Not-a-Number (NaN)
console.log('Boolean + undefined:', bool + undef);
console.log('Undefined + undefined:', undef + undef);

//Addition of string and string
console.log('String + string:', str + str);

//Addition of number and number
console.log('number + number:', num + num);

//Addition of boolean and boolean
console.log('Boolean + boolean:', bool + bool);
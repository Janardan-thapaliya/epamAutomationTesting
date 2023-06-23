//Multiplication of various data types

let str = "John"; //String's multiplication is not possible (even with itself): gives NaN
let num = 12;
let bool = true; //true = 1 and false = 0 (in number type)
let nul = null; //null = 0 (in number type)
let undef;

//Multiplication of string and number
let strNum = str * num;
console.log('String * number:', strNum);

//Multiplication of number and boolean
let numBool =num * bool;
console.log('Number * boolean:', numBool);

//Multiplication of string and boolean
let strbool = str * bool;
console.log('String * boolean:', strbool);

//Multiplication of null with other primitive data types
console.log('String * null:', str * nul);
console.log('Number * null:', num * nul);
console.log('Boolean * null:', bool * nul);
console.log('Undefined * null:', undef * nul);
console.log('Null * null:', nul * nul);

//Multiplication of undef with other data types
console.log('String * undefined:', str * undef); 
console.log('Number * undefined:', num * undef); //All multiplicative operations with undefined gives Not-a-Number (NaN)
console.log('Boolean * undefined:', bool * undef);
console.log('Undefined * undefined:', undef * undef);

//Multiplication of string and string
console.log('String * string:', str * str);

//Multiplication of number and number
console.log('number * number:', num * num);

//Multiplication of boolean and boolean
console.log('Boolean * boolean:', bool * bool);

//Multiplication is applicable for 3 primitive data types (Number, boolean(0,1), and null(0))
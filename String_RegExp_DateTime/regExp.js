//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: 
//letter 'a', any character, letter 'b'


let testStr = "ahb acb aeb aeeb adcb axeb";

let aMatch = testStr.match(/a.b/gi);  //. (dot/period) represents any character

console.log(aMatch);  //['ahb', 'acb', 'aeb']



//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let testStr2 = "2 + 3 223 2223";

let expMatch = testStr2.match(/2\s.\s3/g);  //\s represents space

console.log(expMatch);  //['2 + 3']
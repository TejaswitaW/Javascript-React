console.log(NaN === NaN)//false
console.log(Number.NaN === NaN); //false
// NaN is property of a global object
console.log(isNaN(NaN));// true
console.log(isNaN(Number.NaN));
//NaN is not a number so coming true.
console.log(Number.isNaN(NaN))

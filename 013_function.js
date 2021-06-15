// funciton in javascript
var a = 10, b = 20;

function myAdd(x, y) {
    return x + y;
}

c = myAdd(a, b);// this is function expression
// there should be return keyword in function definition

console.log("Addition of two numbers is: ", c);
console.log("Type of c is: ", typeof (c));

// anonymous function
var funExp = function (x, y) {
    return x * y;
}
console.log("Multiplication of two numbers is: ", funExp(18, 4))
console.log(funExp)
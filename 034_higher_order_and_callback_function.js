const add = (a, b) => { return a + b }
const subs = (a, b) => { return a - b }
const mult = (a, b) => { return a * b }

const calci = (num1, num2, opertator) => { return opertator(num1, num2) }
//  here calci is higher order function
// here operator is callback function
console.log(calci(18, 4, add))
console.log(calci(18, 4, subs))
console.log(calci(18, 4, mult))
// array in javascript
// array traversal
let myVar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myVar)
console.log(myVar[0])
console.log(myVar[5])

console.log(myVar.length)//length is property of array
// you can do this using normal for loop
// for_in loop
for (let i in myVar) {
    console.log(`Element is at ${i}: `, myVar[i])
}
// for_of loop
for (let i of myVar) {
    console.log(`Element is : `, i)
}
console.log("Use of for_each function");
// forEach//valid
myVar.forEach(function (element, index, array) {
    console.log(element);
});
// forEach//valid
myVar.forEach(function (element) {
    console.log(element);
});
// forEach//valid
myVar.forEach(function (element, index, array) {
    console.log(element, index, array);
});
const arrayOne = [1, 4, 9, 16, 25]
// reduce method
const arrayFinal = arrayOne.reduce((accumulator, currelm, index, arr) => {
    debugger;
    return accumulator += currelm;
}, 1000)

console.log(arrayFinal)
// flatten array using reduce
const arr = [
    [11, 14, 19, 116, 125], [21, 24, 29, 216, 225], [31, 34, 39, 316, 325]
];

console.log(arr)
console.log("Above array turned into one dimentional array")
const flatArr = arr.reduce((accumulator, currVal) => {
    return accumulator.concat(currVal)
})
console.log(flatArr)
let myVar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach//valid
myVar.forEach(function (element, index, array) {
    console.log(element, index, array);
});
// forEach using arrow function
myVar.forEach((element, index, array) => {
    console.log(element + " index" + index + " array " + array)

});
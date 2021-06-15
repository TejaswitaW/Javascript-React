// map method
const arrayOne = [1, 4, 9, 16, 25]

// i want number greater than 9

let newArr = arrayOne.map((element, index, arr) => {
    if (element > 9) {
        return element;
    }
    else {
        return 0;
    }
});

console.log(arrayOne)

console.log(newArr)

const finalArray = arrayOne.map((curEl, index, arr) => curEl * 2).filter((curEl) => curEl > 10);
console.log(finalArray)
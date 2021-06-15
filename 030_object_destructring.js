// object destructring
const myBioData = {
    myName: "Teja",
    myLname: "W",
    age: 26
}

// let age = myBioData.age
// console.log(age)

// for object destrucring wee have to use curly brackets
let { myName, myLname, age } = myBioData;
console.log(myLname)
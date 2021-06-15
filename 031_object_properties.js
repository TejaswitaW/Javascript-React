let myName = "Tejaswita";
const myBio = {
    myName: "How are you",
    26: "is my age"
}

console.log(myBio)
// here we want to get dynamic data in an object
// here we will use object properties
// for this we are using square brackets, 
//it shows for this variable i want dynamic data

let myName1 = "Tejaswita";
const myBio1 = {
    [myName1]: "How are you",
    26: "is my age"
}

console.log(myBio1)

let myName2 = "Vaibhavi";
const myBio2 = {
    [myName2]: "How are you",
    [20 + 6]: "is my age"
}

console.log(myBio2)
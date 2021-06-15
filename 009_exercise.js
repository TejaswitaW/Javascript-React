console.log(3 ** 3)
a = 9;
b = 10;
console.log(a, b)
if (a == 10) {
    console.log("a is equal to 10");
}
else {
    console.log("a is not equal to 10");
}

var year = 2020;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("The year is leap year");
        }
        else {
            console.log("This is not leap year");
        }
    }
    else {
        console.log("This is leap year");
    }
}
else {
    console.log("This is not leap year");
}


var age = 19
output = age > 18 ? "Yes" : "No";
console.log(output)
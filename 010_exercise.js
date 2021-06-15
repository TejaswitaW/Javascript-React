// switch statement
var area = "circle";
var PI = 3.14, r = 10, l = 90, b = 10;
switch (area) {
    case "circle": {
        console.log("Circle")
        console.log(PI * r ** 2);
        break;
    }
    case "triangle": {
        console.log("Triangle")
        console.log((l * b) / 2);
        break;
    }
    case "rectangle": {
        console.log("Reactangle")
        console.log(l * b);
        break;
    }
    default: {
        console.log("No proper input")
    }
}

var i = 0;
while (i < 10) {
    console.log("This is while loop");
    i++;
}
console.log("The value of i is : ", i)
do {
    console.log("This is do while loop");
} while (i == 0)
/* sum(5)(3)(8), this is the function with the multiple arguments
this is solved by function currying, this is differnt from sum(5,3,8)*/
function sum(num1) {
    // console.log(num1);
    return function (num2) {
        // console.log(num1,num2);
        return function (num3) {
            console.log(num1 + num2 + num3);
        }
    }

}

sum(5)(3)(8);
// this is synchronous javascript
console.log("Synchronous")
const fun2 = () => {
    console.log("This is function 2");
}
const fun1 = () => {
    console.log("This is function 1");
    fun2();
    console.log("This is function 11");
}
fun1();
// asynchronous javascript
console.log("ASynchronous")
const fun3 = () => {
    setTimeout(() => {
        console.log("This is function 3");
    }, 2000);
}
const fun4 = () => {
    console.log("This is function 4");
    fun3();
    console.log("This is function 44");
}
fun4();
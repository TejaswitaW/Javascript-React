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
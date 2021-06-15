const obj = {
    myAge: 26,
    myName: () => {
        console.log(this);
    }
}
// called the method
// this gives global window object
obj.myName();
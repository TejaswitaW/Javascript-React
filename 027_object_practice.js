// this is inside the object
// this represents the current object 
const obj = {
    myAge: 26,
    myName() {
        console.log(this.myAge);
    }
}
// called the method
obj.myName();

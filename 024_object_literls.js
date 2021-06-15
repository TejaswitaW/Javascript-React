let bioData = {
    myName: "Tejas",
    mySchool: "SGVG",
    getData: function () {
        console.log(this.myName, this.mySchool);
    }
}
console.log(bioData.myName);
console.log(bioData.mySchool);
console.log(bioData.getData())
console.log(bioData.getData)
let ret = bioData.getData();
console.log(ret)
let bioData1 = {
    myName: "Tejas W",
    mySchool: "AVCOE",
    getData() {
        console.log(this.myName, this.mySchool);
    }
}
console.log(bioData1.myName);
console.log(bioData1.mySchool);
console.log(bioData1.getData())
console.log(bioData1.getData)
let ret1 = bioData1.getData();
console.log(ret1)
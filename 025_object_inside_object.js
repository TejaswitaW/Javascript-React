let bioData = {
    myName: {
        fullName: "Tejas W",
        city: "Bangalore"
    },
    mySchool: "AVCOE",
    getData() {
        console.log(this.myName, this.mySchool);
    }
}
console.log(`City in biodata is ${bioData.myName.city}`)
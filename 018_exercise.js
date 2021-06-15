//  we are going to use splice method

const months = ["Jan", "March", "April", "June", "July"];

//sol1:
const newMonth = months.splice(5, 0, "Dec")

console.log(months)

const newMonth2 = months.splice(4, 2, "Dec")

console.log(months)

const newMonth3 = months.splice(months.length, 2, "Dec")

console.log(months)



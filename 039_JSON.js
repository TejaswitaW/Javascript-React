var my_object = {
    key_one: "This is key 1",
    key_two: "This is key 2"
};
var object_as_string = JSON.stringify(my_object);
console.log("My normal JS object");
console.log(my_object);
console.log("My JSON object");
console.log(object_as_string);
console.log(typeof (my_object));
console.log(typeof (object_as_string));

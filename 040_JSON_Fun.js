var my_object = {
    key_one: "This is key 1",
    key_two: "This is key 2"
};
var object_as_string = JSON.stringify(my_object);
console.log("JSON");
console.log(object_as_string)
// to get object in original format 
var original_object_format = JSON.parse(object_as_string);
console.log("In original object format");
console.log(original_object_format)

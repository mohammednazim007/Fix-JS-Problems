// 001: Write a JavaScript program to list the properties of a JavaScript object.
// {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// Output: red, green, white
function listProperties(obj) {
  return Object.keys(obj).join(", ");
}
// console.log(listProperties({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// 002: Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// Output: { name: "David Rayy", sclass: "VI" }
const deleteProperty = (obj, prop) => {
  delete obj[prop];
  return obj;
};
console.log(deleteProperty({ name: "David Rayy", sclass: "VI", rollno: 12 }, "rollno"));
// 001: Write a JavaScript program to list the properties of a JavaScript object.
// {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// Output: red, green, white
function listProperties(obj) {
  return Object.keys(obj).join(", ");
}
// console.log(listProperties({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

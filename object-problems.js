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
// console.log(deleteProperty({ name: "David Rayy", sclass: "VI", rollno: 12 }, "rollno"));

// 003: Write a JavaScript program to get the length of a JavaScript object.
// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// Output: 3
const getLength = (obj) => Object.keys(obj).length;
// console.log(getLength({ name: "David Rayy", sclass: "VI", rollno: 12 }));

// 004: Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output: [-2, 0, 1, 3, 4, 6]
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let w = 0; w < arr.length; w++) {
      if (arr[w] > arr[w + 1]) {
        let temp = arr[w];
        arr[w] = arr[w + 1];
        arr[w + 1] = temp;
      }
    }
  }
  return arr;
};
// console.log(bubbleSort([6, 4, 0, 3, -2, 1]));

// 005: Write a JavaScript program that returns a subset of a string.
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
const generateSubstring = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let w = i + 1; w <= str.length; w++) {
      result.push(str.substring(i, w));
    }
  }
  return result;
};
console.log(generateSubstring("dog"));

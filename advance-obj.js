const person = {
  name: "Rahul",
  age: 23,
  hobbies: ["cricket", "football", "chess"],
  address: {
    city: "Mumbai",
    pincode: 400012,
  },
};

// Object.preventExtensions - is not allow to add new properties but can modify existing properties
const modify = Object.preventExtensions(person);
person.profession = "developer"; // not allowed
person.age = 24; // allowed
console.log(person);

const person2 = {
  name: "Rahul",
  age: 23,
  hobbies: ["cricket", "football", "chess"],
  address: {
    city: "Mumbai",
    pincode: 400012,
  },
};
// Object.seal - is not allow to add new properties and also not allowed to delete existing properties but can modify existing properties
const modify2 = Object.seal(person2);
person2.profession = "developer"; // not allowed
delete person2.name; // not allowed
person2.age = 24; // allowed

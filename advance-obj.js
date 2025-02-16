const person = {
  name: "Rahul",
  age: 23,
  hobbies: ["cricket", "football", "chess"],
  address: {
    city: "Mumbai",
    pincode: 400012,
  },
};

// object.preventExtensions - is not allow to add new properties but can modify existing properties
const modify = Object.preventExtensions(person);
person.profession = "developer"; // not allowed
person.age = 24;// allowed

console.log(person);

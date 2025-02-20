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

const person3 = {
  name: "Rahul",
  age: 23,
  hobbies: ["cricket", "football", "chess"],
  address: {
    city: "Mumbai",
    pincode: 400012,
  },
};
// Object.freeze - is not allow to add new properties and also not allowed to delete existing properties and also not allowed to modify existing properties
const modify3 = Object.freeze(person3);
person3.profession = "developer"; // not allowed
delete person3.name; // not allowed
person3.age = 24; // not allowed

const person4 = {
  name: "Rahul",
  age: 23,
  hobbies: ["cricket", "football", "chess"],
  address: {
    city: "Mumbai",
    pincode: 400012,
  },
};
// Object.assign - is used to copy properties from one object to another
const person5 = Object.assign({}, person4);
person5.name = "Rahul Kumar";



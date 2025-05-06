const person = {
  name: "Mohammed Nazim",
  age: 22,
};

const personFn = function () {
  console.log(`Person name is ${person.name} and age is ${person.age}`);
};
personFn.call(person);

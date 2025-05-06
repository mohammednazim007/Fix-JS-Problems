const arrowFn = function (name, age) {
  return {
    name: name,
    age: age,
    fatherName: function () {
      console.log(`Father's name is ${this.name}`);
    },
  };
};

const person = arrowFn("John", 30);
person.fatherName(); // Father's name is undefined

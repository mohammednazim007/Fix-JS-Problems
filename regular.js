const arrowFn = (name, age) => {
  return {
    name: this.name,
    age: this.age,
    fatherName: () => {
      console.log(`Father's name is ${this.name}`);
    },
  };
};

const person = arrowFn("John", 30);

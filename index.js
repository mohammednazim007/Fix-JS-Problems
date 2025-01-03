const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

// departments
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// 21: Can you filter employees who work in the "Engineering" department?
// [ { id: 2, name: 'Engineering' } ]
const engineeringEmployees = departments.filter(
  (employee) => employee.name === "Engineering"
);

//T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
//  ['Alice - (HR)','Bob - (Engineering)']
const combinedArray = employees.map((employee) => {
  return `${employee.name} - (${departments[employee.departmentId - 1].name})`;
});

// second way
const combinedArray2 = employees.reduce((acc, employee) => {
  acc.push(
    `${employee.name} - (${departments[employee.departmentId - 1].name})`
  );
  return acc;
}, []);

//T-023: Find the highest salary among employees.
// 8000
const highestSalary = employees.reduce((acc, employee) => {
  return employee.salary < acc ? acc : employee.salary;
}, 0);

// second way
const highestSalary2 = employees.reduce((acc, employee) => {
  return Math.max(acc, employee.salary);
}, 0);

// third way
const highestSalary3 = Math.max(
  ...employees.map((employee) => employee.salary)
);

//T-024: Check if there is at least one employee in the "Sales" department.
// filter method will return all match value (if multiple value exist)
// [ { id: 4, name: 'Sales' } ]
const oneSalesEmployee = departments.filter(
  (employees) => employees.name.toLocaleLowerCase() === "sales"
);

// in JS (find) method is used to search for the first element
const secondSales = departments.find(
  (salesman) => salesman?.name?.toLocaleLowerCase() === "sales"
);

// T-025: Write a function to filter employees earning more than 6000.
// [
//   { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
//   { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
//   { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
//   { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
// ];
const biggestSalary = employees.filter((salary) => salary.salary >= 6000);

// T-026: Create an array of employee names only.
// [
//   'Alice',   'Bob',
//   'Charlie', 'Diana',
//   'Edward',  'Fiona',
//   'George',  'Helen',
// ]
const employeeNameArray = employees.map((employees) => `${employees?.name}`);

// T-027: Calculate the total salary of all employees using
// 58300
const employeeTotalSalary = employees?.reduce((accumulator, current) => {
  accumulator += current.salary;
  return accumulator;
}, 0);

// second way
// { totalSalary: 58300 }
const secondTotalSalary = employees.reduce(
  (acc, current) => {
    acc.totalSalary += current.salary;
    return acc;
  },
  {
    totalSalary: 0,
  }
);

// T-028: Is there any employee earning less than 5000?
// [
//   { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
//   { id: 9, name: 'Ian', departmentId: 2, salary: 4800 }
// ]
const lessSalary = employees.filter((less) => less.salary < 5000);

// T-029: Find the first employee who earns exactly 5100.
const firstEmployee = employees.find((salary) => salary.salary === 5100);
console.log(firstEmployee);

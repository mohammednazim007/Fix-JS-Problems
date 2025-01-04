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

// // 21: Can you filter employees who work in the "Engineering" department?
// // [ { id: 2, name: 'Engineering' } ]
// const engineeringEmployees = departments.filter(
//   (employee) => employee.name === "Engineering"
// );

// //T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
// //  ['Alice - (HR)','Bob - (Engineering)']
// const combinedArray = employees.map((employee) => {
//   return `${employee.name} - (${departments[employee.departmentId - 1].name})`;
// });

// // second way
// const combinedArray2 = employees.reduce((acc, employee) => {
//   acc.push(
//     `${employee.name} - (${departments[employee.departmentId - 1].name})`
//   );
//   return acc;
// }, []);

// //T-023: Find the highest salary among employees.
// // 8000
// const highestSalary = employees.reduce((acc, employee) => {
//   return employee.salary < acc ? acc : employee.salary;
// }, 0);

// // second way
// const highestSalary2 = employees.reduce((acc, employee) => {
//   return Math.max(acc, employee.salary);
// }, 0);

// // third way
// const highestSalary3 = Math.max(
//   ...employees.map((employee) => employee.salary)
// );

// //T-024: Check if there is at least one employee in the "Sales" department.
// // filter method will return all match value (if multiple value exist)
// // [ { id: 4, name: 'Sales' } ]
// const oneSalesEmployee = departments.filter(
//   (employees) => employees.name.toLocaleLowerCase() === "sales"
// );

// // in JS (find) method is used to search for the first element
// const secondSales = departments.find(
//   (salesman) => salesman?.name?.toLocaleLowerCase() === "sales"
// );

// // T-025: Write a function to filter employees earning more than 6000.
// // [
// //   { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
// //   { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
// //   { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
// //   { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
// // ];
// const biggestSalary = employees.filter((salary) => salary.salary >= 6000);

// // T-026: Create an array of employee names only.
// // [
// //   'Alice',   'Bob',
// //   'Charlie', 'Diana',
// //   'Edward',  'Fiona',
// //   'George',  'Helen',
// // ]
// const employeeNameArray = employees.map((employees) => `${employees?.name}`);

// // T-027: Calculate the total salary of all employees using
// // 58300
// const employeeTotalSalary = employees?.reduce((accumulator, current) => {
//   accumulator += current.salary;
//   return accumulator;
// }, 0);

// // second way
// // { totalSalary: 58300 }
// const secondTotalSalary = employees.reduce(
//   (acc, current) => {
//     acc.totalSalary += current.salary;
//     return acc;
//   },
//   {
//     totalSalary: 0,
//   }
// );

// // T-028: Is there any employee earning less than 5000?
// // [
// //   { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
// //   { id: 9, name: 'Ian', departmentId: 2, salary: 4800 }
// // ]
// const lessSalary = employees.filter((less) => less.salary < 5000);

// // T-029: Find the first employee who earns exactly 5100.
// // { id: 10, name: 'Jane', departmentId: 1, salary: 5100 }
// const firstEarnEmployee = employees.find((salary) => salary.salary === 5100);

// // T-030: Find the last employee in the "HR" department.
// const findLastEmployeeId = departments.find(
//   (emp) => emp.name.toLowerCase() === "hr"
// ).id;
// const lastHREmployee = employees.filter(
//   (last) => last.id === findLastEmployeeId
// );
// const lastEmployee = departments[lastHREmployee.length - 1];

// // T-031: Find the first employee in the "Marketing" department.
// // [ { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 } ]

// const firstMarketingEmployeeId = departments.find(
//   (mrk) => mrk.name.toLowerCase() === "marketing"
// ).id;
// const firstMarketingEmployee = employees.filter(
//   (employee) => employee.id === firstMarketingEmployeeId
// );

// // T-034: Verify if all employees belong to a department listed in the departments array.
// const validUsers = departments.map((department) => department.id);
// const validUser = employees.filter((employeeUser) =>
//   validUsers.includes(employeeUser.departmentId)
// );

// // T-035: Log each employee's name and department name to the console.
// // ["Alice - HR","Bob - Engineering","Charlie - Marketing","Diana - HR","Fiona - Sales"];
// const displayEmployeeName = employees.map((emp) => {
//   return `${emp.name} - ${departments[emp.departmentId - 1].name}`;
// });

// //  T-036: Extract all employee skill names into a single array.
// const employeeArray = employees.map((employee) => {
//   return `${employee.name} - ${departments[employee.departmentId - 1].name}`;
// });

// // T-037: Increment each employee's salary by 10%
// const incrementSalary = employees.map((employee) => {
//   return {
//     ...employee,
//     salary: Math.ceil(employee.salary * 1.1),
//   };
// });

// // second way
// const secondIncreaseSalary = employees.reduce((acc, curr) => {
//   acc.push({
//     ...curr,
//     salary: Math.ceil(curr.salary * 1.1),
//   });
//   return acc;
// }, []);

// // ===============================================
// const employeesWithSkills = [
//   {
//     id: 1,
//     name: "Alice",
//     departmentId: 1,
//     salary: 5000,
//     skills: ["Excel", "Management"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     departmentId: 2,
//     salary: 7000,
//     skills: ["JavaScript", "React"],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     departmentId: 3,
//     salary: 4500,
//     skills: ["Python", "Data Analysis"],
//   },
//   {
//     id: 4,
//     name: "Diana",
//     departmentId: 1,
//     salary: 5500,
//     skills: ["Leadership", "Time Management"],
//   },
//   {
//     id: 5,
//     name: "Edward",
//     departmentId: 2,
//     salary: 8000,
//     skills: ["Sales", "Negotiation"],
//   },
//   {
//     id: 6,
//     name: "Fiona",
//     departmentId: 4,
//     salary: 6000,
//     skills: ["Java", "Spring"],
//   },
//   {
//     id: 7,
//     name: "George",
//     departmentId: 3,
//     salary: 5200,
//     skills: ["SQL", "Database Design"],
//   },
//   {
//     id: 8,
//     name: "Helen",
//     departmentId: 4,
//     salary: 7200,
//     skills: ["Marketing", "SEO"],
//   },
//   {
//     id: 9,
//     name: "Ian",
//     departmentId: 2,
//     salary: 4800,
//     skills: ["AWS", "DevOps"],
//   },
//   {
//     id: 10,
//     name: "Jane",
//     departmentId: 1,
//     salary: 5100,
//     skills: ["UI/UX Design", "Prototyping"],
//   },
// ];
// // T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
// //  Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
// const multipleSkillsArray = employeesWithSkills
//   .map((skills) => skills.skills)
//   .flat();

// // second way
// const secondSkillArray = employeesWithSkills.flatMap((item) => item.skills);

// // T-039: Find the total salary of all employees working in the "Engineering" department.
const engineerId = departments.find((user) => user.name === "Engineering").id;
const allEngineer = employees.filter(
  (user) => user.departmentId === engineerId
);
const engTotalSalary = allEngineer.reduce((acc, current) => {
  acc += current.salary;
  return acc;
}, 0);


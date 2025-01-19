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
const engineeringEmployees = departments.filter(
  (employee) => employee.name === "Engineering"
);

// //T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
// //  ['Alice - (HR)','Bob - (Engineering)']
const combinedArray = employees.map((employee) => {
  return `${employee.name} - (${departments[employee.departmentId - 1].name})`;
});

// // second way
const combinedArray2 = employees.reduce((acc, employee) => {
  acc.push(
    `${employee.name} - (${departments[employee.departmentId - 1].name})`
  );
  return acc;
}, []);

// //T-023: Find the highest salary among employees.
// // 8000
const highestSalary = employees.reduce((acc, employee) => {
  return employee.salary < acc ? acc : employee.salary;
}, 0);

// // second way
const highestSalary2 = employees.reduce((acc, employee) => {
  return Math.max(acc, employee.salary);
}, 0);

// // third way
const highestSalary3 = Math.max(
  ...employees.map((employee) => employee.salary)
);

// //T-024: Check if there is at least one employee in the "Sales" department.
// // filter method will return all match value (if multiple value exist)
// // [ { id: 4, name: 'Sales' } ]
const oneSalesEmployee = departments.filter(
  (employees) => employees.name.toLocaleLowerCase() === "sales"
);

// // in JS (find) method is used to search for the first element
const secondSales = departments.find(
  (salesman) => salesman?.name?.toLocaleLowerCase() === "sales"
);

// // T-025: Write a function to filter employees earning more than 6000.
// // [
// //   { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
// //   { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
// //   { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
// //   { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
// // ];
const biggestSalary = employees.filter((salary) => salary.salary >= 6000);

// // T-026: Create an array of employee names only.
// // [
// //   'Alice',   'Bob',
// //   'Charlie', 'Diana',
// //   'Edward',  'Fiona',
// //   'George',  'Helen',
// // ]
const employeeNameArray = employees.map((employees) => `${employees?.name}`);

// // T-027: Calculate the total salary of all employees using
// // 58300
const employeeTotalSalary = employees?.reduce((accumulator, current) => {
  accumulator += current.salary;
  return accumulator;
}, 0);

// // second way
// // { totalSalary: 58300 }
const secondTotalSalary = employees.reduce(
  (acc, current) => {
    acc.totalSalary += current.salary;
    return acc;
  },
  {
    totalSalary: 0,
  }
);

// // T-028: Is there any employee earning less than 5000?
// // [
// //   { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
// //   { id: 9, name: 'Ian', departmentId: 2, salary: 4800 }
// // ]
const lessSalary = employees.filter((less) => less.salary < 5000);

// // T-029: Find the first employee who earns exactly 5100.
// // { id: 10, name: 'Jane', departmentId: 1, salary: 5100 }
const firstEarnEmployee = employees.find((salary) => salary.salary === 5100);

// // T-030: Find the last employee in the "HR" department.
const findLastEmployeeId = departments.find(
  (emp) => emp.name.toLowerCase() === "hr"
).id;
const lastHREmployee = employees.filter(
  (last) => last.id === findLastEmployeeId
);
const lastEmployee = departments[lastHREmployee.length - 1];

// // T-031: Find the first employee in the "Marketing" department.
// // [ { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 } ]

// const firstMarketingEmployeeId = departments.find(
//   (mrk) => mrk.name.toLowerCase() === "marketing"
// ).id;
// const firstMarketingEmployee = employees.filter(
//   (employee) => employee.id === firstMarketingEmployeeId
// );

// // T-034: Verify if all employees belong to a department listed in the departments array.
const validUsers = departments.map((department) => department.id);
const validUser = employees.filter((employeeUser) =>
  validUsers.includes(employeeUser.departmentId)
);

// // T-035: Log each employee's name and department name to the console.
// // ["Alice - HR","Bob - Engineering","Charlie - Marketing","Diana - HR","Fiona - Sales"];
const displayEmployeeName = employees.map((emp) => {
  return `${emp.name} - ${departments[emp.departmentId - 1].name}`;
});

// //  T-036: Extract all employee skill names into a single array.
const employeeArray = employees.map((employee) => {
  return `${employee.name} - ${departments[employee.departmentId - 1].name}`;
});

// // T-037: Increment each employee's salary by 10%
const incrementSalary = employees.map((employee) => {
  return {
    ...employee,
    salary: Math.ceil(employee.salary * 1.1),
  };
});

// // second way
const secondIncreaseSalary = employees.reduce((acc, curr) => {
  //   acc.push({
  //     ...curr,
  //     salary: Math.ceil(curr.salary * 1.1),
  //   });
  //   return acc;
}, []);

// // ===============================================
const employeesWithSkills = [
  {
    id: 1,
    name: "Alice",
    departmentId: 1,
    salary: 5000,
    skills: ["Excel", "Management"],
  },
  {
    id: 2,
    name: "Bob",
    departmentId: 2,
    salary: 7000,
    skills: ["JavaScript", "React", "Excel", "Management"],
  },
  {
    id: 3,
    name: "Charlie",
    departmentId: 3,
    salary: 4500,
    skills: ["Python", "Data Analysis", "Excel", "Management"],
  },
  {
    id: 4,
    name: "Diana",
    departmentId: 1,
    salary: 5500,
    skills: ["Leadership", "Time Management"],
  },
  {
    id: 5,
    name: "Edward",
    departmentId: 2,
    salary: 8000,
    skills: ["Sales", "Python", "Data Analysis", "Negotiation"],
  },
  {
    id: 6,
    name: "Fiona",
    departmentId: 4,
    salary: 6000,
    skills: ["Java", "Spring", "Python", "Data Analysis"],
  },
  {
    id: 7,
    name: "George",
    departmentId: 3,
    salary: 5200,
    skills: ["SQL", "Database Design"],
  },
  {
    id: 8,
    name: "Helen",
    departmentId: 4,
    salary: 7200,
    skills: ["Marketing", "SEO"],
  },
  {
    id: 9,
    name: "Ian",
    departmentId: 2,
    salary: 4800,
    skills: ["AWS", "DevOps"],
  },
  {
    id: 10,
    name: "Jane",
    departmentId: 1,
    salary: 5100,
    skills: ["UI/UX Design", "Prototyping"],
  },
];
// // T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
// //  Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const multipleSkillsArray = employeesWithSkills
  .map((skills) => skills.skills)
  .flat();

// // second way
const secondSkillArray = employeesWithSkills.flatMap((item) => item.skills);

// // T-039: Find the total salary of all employees working in the "Engineering" department.
const engineerId = departments.find((user) => user.name === "Engineering").id;
const allEngineer = employees.filter(
  (user) => user.departmentId === engineerId
);
const engTotalSalary = allEngineer.reduce((acc, current) => {
  acc += current.salary;
  return acc;
}, 0);

// T-040: Check if there is any department where all employees earn more than 5000.
// Group employees by department
const groupedByDepartment = departments.map((user) => ({
  departmentName: user.name,
  departmentsSalary: employees
    .filter((userEmployee) => userEmployee.departmentId === user.id)
    .every((sl) => sl.salary > 5000),
}));
const biggest = groupedByDepartment.find((dept) => dept.departmentsSalary);

// 041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
const employeeUsers = employeesWithSkills.flatMap((skills) => skills.skills);
const uniqueArray = [...new Set(employeeUsers)];

// second way
const skillsReducer = employeesWithSkills.reduce((acc, current) => {
  current.skills.forEach((item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);

// -042: For each employee, find their department name and return an array of employee names with their department names.
const employeeDepartment = employees.map((employee) => {
  return {
    name: employee.name,
    department: departments[employee.departmentId - 1].name,
  };
});

// 043: Get a list of names of employees earning more than 6000.
const earnMoreThan6000 = employees.filter((employee) => employee.salary > 6000);

// 044: Write a for-of loop to print the names of all employees from the employees array.
for (const employee of employees) {
  // console.log(employee.name);
}

// 045: Using a for-of loop, print the names of employees earning more than 5000.
for (const employee of employees) {
  if (employee.salary < 5000) {
    // console.log(`${employee.name}`, `${employee.salary}`);
  }
}

// 046: Modify the for-of loop to destructure each employee object and log their name and salary.
for (const { name, salary } of employees) {
  // console.log(name, salary);
}

// 047: Write a for-of loop to match employees with their departments and print the results.
for (const { name, departmentId } of employees) {
  const department = departments.find((dept) => dept.id === departmentId);
  // console.log(`${name} - ${department.name}`);
}

// 048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
for (const [index, employee] of employees.entries()) {
  // console.log(index, employee.name);
}

// 049: Given the array-like object below, access the second element and log it
const arrayLike = { 0: "First", 1: "Second", length: 2 };
const arrayResult = arrayLike[1];
const isArray = Array.from(arrayLike);

// 051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
// const divs = document?.querySelectorAll("div");
// const nodeList = Array.from(divs);
// console.log(nodeList); ❌

// 052: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = arr1.concat(arr2);
const secondMergedArray = [...arr1, ...arr2];
// console.log(mergedArray); // [1, 2, 3, 4]
// console.log(secondMergedArray); // [1, 2, 3, 4]

// 053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const arr = Array.from({ length: 5 }, () => "A");

// second way
const array2 = Array(5).fill("A");

// 054: Use Array.from to convert a string like "Hello" into an array of characters.
const str = "Hello";
const arrString = Array.from(str);
// console.log(arrString); // ["H", "e", "l", "l", "o"]

// 055: find the array last value with (at)
// console.time("055");
const lastValue = [1, 2, 3, 4, 5, 55].at(-1);
// console.timeEnd("055");

// 056: find the array last value which is take less memory & execution time
// console.time("056");
const arrayValue = [1, 2, 3, 4, 5];
const lastValue2 = arrayValue.unshift();
// console.timeEnd("056");

//  57:Write a JavaScript function to check whether an `input` is an array or not.
const isArrayFn = (input) => {
  return Array.isArray(input);
};

// 058: Write a JavaScript function to check whether an `input` is an object or not.
const isObject = (input) => {
  return typeof input === "object" && input !== null;
};

// 059: Write a JavaScript function to clone an array it could be nested.
const cloneArray = (input = []) => {
  return input.slice(0);
};
// console.log(cloneArray([1, 2, 3,[4,5,[6]]]));

// 060: Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
const getFirstElement = (arr, n) => {
  return arr.slice(0, n);
};

// 061: Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
const getLastElement = (arr, n) => {
  return arr.slice(-n);
};

const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getFirstElement(firstArray, 8));
// console.log(getLastElement(firstArray,3));

// 062: Write a JavaScript function to get the first and last element of an array. Passing the parameter 'n' will return the first 'n' and last 'n' elements of the array.
const myColor = ["Red", "Green", "White", "Black"];
const myColorJoined = myColor.join(", ");
// console.log(myColorJoined);

// 063: Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
const numberToDashes = (num) => {
  let dashes = "";

  for (let i = 0; i < num.length; i++) {
    if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
      dashes += "-";
    }
    dashes += num[i];
  }
  return dashes;
};

// 064:Write a JavaScript program to sort the items of an array.
const strArray = [-3, 8, 7, 6, 5, -4, 3, 2, 1, "0", "-88"];
const sortedArray = strArray.sort((a, b) => a - b);
// console.log(sortedArray);

// 065:Write a JavaScript program to find the most frequent item in an array.
const mostFrequent = [
  3,
  "a",
  "a",
  "a",
  2,
  3,
  "a",
  3,
  "a",
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  4,
  9,
  3,
];

const mostFrequentItem = mostFrequent.reduce(
  (acc, curr) => {
    acc.elements[curr] = (acc.elements[curr] || 0) + 1;

    // Update the most frequent item and its count
    if (acc.elements[curr] > acc.maxCount) {
      acc.maxCount = acc.elements[curr];
      acc.item = curr;
    }

    return acc;
  },
  { elements: {}, maxCount: 0, item: null }
);
// console.log(mostFrequentItem);

// second way
const secondMostFrequentFn = (arr) => {
  let elements = {};
  let maxCount = 0;
  let item = null;

  arr.forEach((element) => {
    elements[element] = (elements[element] || 0) + 1;

    if (elements[element] > maxCount) {
      maxCount = elements[element];
      item = element;
    }
  });

  return { elements, maxCount, item };
};
// console.log(secondMostFrequentFn(mostFrequent));

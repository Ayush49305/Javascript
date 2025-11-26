// 1. var (old way - function scoped)
var name = "Ayush"; // string variable
console.log("Name:", name);

// 2. let (modern way - block scoped)
let age = 20; // number variable
console.log("Age:", age);

// 3. const (value cannot be changed)
const country = "India"; // constant variable
console.log("Country:", country);


// DATA TYPES IN JAVASCRIPT

// 1. String
let course = "Computer Science"; 
console.log("Course:", course);
console.log("Type:", typeof course); // typeof shows data type

// 2. Number
let marks = 95; // integer
let percentage = 89.5; // decimal
console.log("Marks:", marks);
console.log("Percentage:", percentage);
console.log("Type:", typeof marks);

// 3. Boolean
let isPassed = true; // true or false
console.log("Passed:", isPassed);
console.log("Type:", typeof isPassed);

// 4. Undefined
let result; // value not assigned
console.log("Result:", result);
console.log("Type:", typeof result);

// 5. Null
let value = null; // intentionally empty
console.log("Value:", value);
console.log("Type:", typeof value); // object (this is a known JS bug)

// 6. Object
let student = {
  name: "Ayush",
  rollNo: 101,
  branch: "CSE"
};
console.log("Student Object:", student);
console.log("Type:", typeof student);

// 7. Array (special type of object)
let numbers = [10, 20, 30, 40];
console.log("Array:", numbers);
console.log("Type:", typeof numbers);



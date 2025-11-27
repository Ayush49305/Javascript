// ==================================================
// JAVASCRIPT OPERATORS & CONDITIONAL STATEMENTS
// Revision Code with Comments
// You can type and run this in your laptop
// Use Browser Console or Node.js
// ==================================================


// ================= OPERATORS IN JAVASCRIPT =================

// -------- 1. ARITHMETIC OPERATORS --------
let x = 10;
let y = 3;

console.log("Addition:", x + y);      // 13
console.log("Subtraction:", x - y);   // 7
console.log("Multiplication:", x * y); // 30
console.log("Division:", x / y);      // 3.333...
console.log("Modulus:", x % y);       // 1 (remainder)


// -------- 2. ASSIGNMENT OPERATORS --------
let a = 5;
a += 2;  // a = a + 2
console.log("a += 2:", a);

a -= 1;  // a = a - 1
console.log("a -= 1:", a);

a *= 3;  // a = a * 3
console.log("a *= 3:", a);

a /= 2;  // a = a / 2
console.log("a /= 2:", a);


// -------- 3. COMPARISON OPERATORS --------
let p = 10;
let q = "10";

console.log(p == q);   // true  (only value checked)
console.log(p === q);  // false (value + type checked)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p < 5);    // false
console.log(p >= 10);  // true
console.log(p <= 10);  // true


// -------- 4. LOGICAL OPERATORS --------
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND -> false
console.log(isAdult || hasID); // OR  -> true
console.log(!isAdult);         // NOT -> false


// ================= CONDITIONAL STATEMENTS =================

// -------- 1. IF STATEMENT --------
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
}


// -------- 2. IF ELSE STATEMENT --------
let number = 7;

if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}


// -------- 3. IF ELSE IF LADDER --------
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


// -------- 4. SWITCH STATEMENT --------
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid Day");
}


// -------- 5. TERNARY OPERATOR --------
let temp = 25;

let weather = (temp > 20) ? "Hot" : "Cold";
console.log("Weather:", weather);


// ================= PRACTICE SECTION =================
// Try changing values and see output

let num1 = 15;
let num2 = 20;

if (num1 > num2) {
  console.log("num1 is greater");
} else {
  console.log("num2 is greater");
}


// ================= SUMMARY =================
// Operators Types:
// Arithmetic   -> + - * / %
// Assignment   -> = += -= *= /=
// Comparison   -> == === != !== > < >= <=
// Logical      -> && || !

// Conditional Statements:
// if
// if-else
// else-if ladder
// switch
// ternary operator

console.log("✅ Re
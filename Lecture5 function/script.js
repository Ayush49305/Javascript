/*
👉 What is a Function?
A function is a block of code that performs a specific task.
It helps in code reusability and better structure.
*/

/**************************************************
 * 1. FUNCTION DECLARATION
 **************************************************/

function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

// Function call
greet();

/**************************************************
 * 2. FUNCTION WITH PARAMETERS
 **************************************************/

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Ayush");

/**************************************************
 * 3. FUNCTION WITH MULTIPLE PARAMETERS
 **************************************************/

function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log("Sum:", sum);

/**************************************************
 * 4. FUNCTION WITH RETURN VALUE
 **************************************************/

function square(num) {
    return num * num;
}

console.log(square(4));

/**************************************************
 * 5. FUNCTION EXPRESSION
 **************************************************/

const multiply = function (x, y) {
    return x * y;
};

console.log(multiply(3, 4));

/**************************************************
 * 6. ARROW FUNCTION (ES6)
 **************************************************/

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 5));

/**************************************************
 * 7. SHORT ARROW FUNCTION
 **************************************************/

const cube = n => n * n * n;
console.log(cube(3));

/**************************************************
 * 8. DEFAULT PARAMETERS
 **************************************************/

function greetMsg(name = "Guest") {
    console.log("Hello " + name);
}

greetMsg();
greetMsg("Ayush");

/**************************************************
 * 9. FUNCTION INSIDE FUNCTION
 **************************************************/

function outerFunction() {
    console.log("Outer Function");

    function innerFunction() {
        console.log("Inner Function");
    }

    innerFunction();
}

outerFunction();

/**************************************************
 * 10. CALLBACK FUNCTION
 **************************************************/

function display(result) {
    console.log("Result:", result);
}

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(5, 7, display);

/**************************************************
 * 11. IIFE (Immediately Invoked Function Expression)
 **************************************************/

(function () {
    console.log("IIFE Executed Immediately");
})();

/**************************************************
 * 12. RECURSIVE FUNCTION
 **************************************************/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

/**************************************************
 * 13. ANONYMOUS FUNCTION
 **************************************************/

setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

/**************************************************
 * 14. FUNCTION RETURNING FUNCTION
 **************************************************/

function outer() {
    return function inner() {
        console.log("Returned Function");
    };
}

let fn = outer();
fn();

/**************************************************
 * END OF FUNCTIONS CHAPTER
 **************************************************/

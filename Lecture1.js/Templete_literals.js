// Template literals in JavaScript are a modern way to work with strings.
// They use backticks (`) instead of quotes and allow you to easily insert
// variables and expressions using ${ }. Template literals also make it 
// simple to create multi-line strings without needing special characters.
// Overall, they help write cleaner and more readable string-related code.

let obj={
  item:"pen",
  price:10,
};

let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//Normal way

console.log("The cost of",obj.item," is",obj.price," rupees");
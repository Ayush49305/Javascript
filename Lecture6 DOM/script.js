// DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to dynamically access, modify, add, and delete the content, structure, and style of a web page.

// let heading=document.getElementById("heading");  /*Access the element with Id*/
// console.dir(heading);

// let headings=document.getElementsByClassName("heading"); /* Access the element with class name*/
// console.dir(headings);
// console.log(headings);

// let parahs=document.getElementsByTagName("p");  /*Access the element with Tag Name*/
// console.dir(parahs);

let firstEl=document.querySelector("p");   /*Access any type of element just by id / tag/ class name*/
console.dir(firstEl);

let allEl=document.querySelectorAll("p");  /* To access all particular element*/
console.dir(allEl);
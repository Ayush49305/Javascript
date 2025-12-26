// DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to dynamically access, modify, add, and delete the content, structure, and style of a web page.

// let heading=document.getElementById("heading");  /*Access the element with Id*/
// console.dir(heading);

// let headings=document.getElementsByClassName("heading"); /* Access the element with class name*/
// console.dir(headings);
// console.log(headings);

// let parahs=document.getElementsByTagName("p");  /*Access the element with Tag Name*/
// console.dir(parahs);

// let firstEl=document.querySelector("#fpara");   /*Access any type of element just by id / tag/ class name*/
// console.dir(firstEl);

// let allEl=document.querySelectorAll("p");   /* To access all particular element*/
// console.dir(allEl);

// let secEl=document.querySelector("#myId"); /*To access tag name we use E2.tagName.*/
// console.dir(E2);

// let div=document.querySelector("div");     /*To access all the text inside element we use div.innerText */
// console.log(div); 

// let div=document.querySelector("div");     /*To access all the text along with its tag name we use div.innerHTML */
// console.log(div);                          /*To set the text use div.innerHTML='text name';  */

// let head=document.querySelector("h2");     /* To access the text of the hidden element use head.textContent */
// console.log(head);

// let head1=document.querySelector("#H1");      
// console.log(head1.getAttribute("id"));      /* To access the value of attribute*/

// let head2=document.querySelector("h5")
// console.log(head2.setAttribute("id","newTopic"));  /* to set the value of attributes*/

let div1=document.querySelector("#box");
div1.style.backgroundColor="green";
div1.style.fontSize="23px";
//Way to insert element 

let newButton=document.createElement("button");  /*Firstly create the element*/
newButton.innerText="Click me!";
console.log(newButton);

let div=document.querySelector("div");  
// div.append(newButton);                  /*Then, by using append insert at the end of the node(insside)*/
// div.prepend(newButton);      /*to insert at start of the node(inside)*/
// div.before(newButton);       /*To add before the node */
div.after(newButton);          /*To add after the node  */
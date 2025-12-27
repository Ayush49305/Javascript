// Syntax to apply event

// let btn1=document.querySelector("#btn1"); 

// btn1.onclick=()=>{
//     console.log("btn1 was clicked");   
// };


// let div1=document.querySelector("#div1");
// div1.onmouseover=()=>{
//     console.log("you are inside div");
// };



// let btn1=document.querySelector("#btn1");

// //event object
// btn1.onclick=(evt)=>{
//     console.log(evt);  /*This will print the value of various event object*/
//     console.log(evt.type);  
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY); /*This will print position of event on screen*/
// };



// Execute event using addEventListener.multiple event in single element can execute (Besy way)  */

// let btn1=document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>{
//     console.log("btn1 was clicked");
//     console.log(evt);  
//     console.log(evt.type);  
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// });



//Remove event using node.removeEventListener  */

let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked-handler1");
});

const handler2=()=>{
    console.log("btn1 was clicked-handler2");
};
btn1.addEventListener("click",handler2);

btn1.removeEventListener("click",handler2);  /* Store the function in variable and after that call remove function*/ 




//Synchronous:-Synchronous means the code runs in a particular sequence of instructions given in the program.Each instruction waits for the previous instruction to complete its execution.

//ASynchronous:-Due to synchronous programming,sometimes imp instruction get blocked due to some previous instructions,which causes delay in the UI.Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

console.log("One");
console.log("Two");

function hello(){
    console.log("hello");
}
setTimeout(hello,4000); //hello function will wait 4 sec but next instruction will not stop,it will execute continue. 

console.log("Three");
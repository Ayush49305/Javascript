// For of loop

// let size=0;
// let str="Javascript";
// for(let val of str){
//     console.log("Val=",val);
//     size++;
// }
// console.log("String size =",size);


// For in loop:It return the key of object like

// let student={
//     Name:"Ayush Raj",
//     Roll:2403186,
//     cgpa:9.7,
//     pass:true,
// };

// for(let key in student){
//     console.log("key=",key, "value=",student[key]);
// }


//Template literals

let obj={
    item:"pen",
    cost:10,
};

console.log("The cost of",obj.item,"is",obj.cost,"ruppee"); //Normal way 

let output=`The cost of ${obj.item} is ${obj.cost} ruppee`; //Template literal method
console.log(output);
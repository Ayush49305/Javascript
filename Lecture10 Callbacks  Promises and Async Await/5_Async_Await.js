//async/await is syntactic sugar over promises that makes async code look synchronous.

function asyncFun1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("Sucess");
        },4000);
    });
}

function asyncFun2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Sucess");
        },4000);
    });
}

//async:-Makes a function return a Promise and Allows use of await inside it.
//await:-Allows use of await inside it.
 
async function asyncFun(){
    console.log("Feching data1....");
    await asyncFun1();
    console.log("Feching data2....");
    await asyncFun2();
}
//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     // resolve("Task completed");
//     reject("Some error occured");
// });



// function getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success");
//             // reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }



//use of .then() and .catch()
// then() runs only when resolve() is called
// catch() runs only when reject() is called

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("success");
        reject("Network error");
    });
};

let promise=getPromise();
promise.then((res)=>{
    console.log("Promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("Rejected",err);
});
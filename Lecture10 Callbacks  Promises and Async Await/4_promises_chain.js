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
 //promise chain 

// console.log("Fetching data1......");
// let p1=asyncFun1();
// p1.then((res) =>{
//     console.log("Fetching data2......");
//     let p2=asyncFun2();
//     p2.then((res) =>{});
// });

//Other way to write promise chain

console.log("Fetching data....");
asyncFun1()
  .then((res)=>{
    return asyncFun2();
  })
  .then((res)=>{
    console.log(res);
  })
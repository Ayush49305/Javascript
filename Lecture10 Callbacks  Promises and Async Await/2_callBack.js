// Callback is the function which is used inside another function as arguments and executed later.

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(3,7,sum);



//callback Hell:-Nested callback stacked below one another forming a pyramide structure.

function getData(dataID,getNextData){

    //This code will run AFTER 2 seconds
    setTimeout(() =>{
        // Print the current dataId after delay

        console.log("data",dataID);

        // Check if a next callback function exists
        // This prevents error when no callback is passed
        if(getNextData){
            // Call the next function (callback)
            // This ensures the next data runs ONLY after current one finishes
            getNextData();
        }
    },2000);
}
//callback hell
// First data call
// After data 1 is printed, callback will execute
getData(1,()=>{
    // This runs AFTER data 1 is printed
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});
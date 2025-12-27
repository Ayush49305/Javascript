let modebtn=document.querySelector("#mode");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
    document.querySelector("body").style.backgroundColor="black";
    modebtn.innerText="Turn on Light mode";
    } else {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        modebtn.innerText="Turn on Dark mode";
    }
});


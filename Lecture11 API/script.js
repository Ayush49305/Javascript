const URL="https://catfact.ninja/fact";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts = async () =>{
    console.log("Getting data....");
    //Send a request to the API and wait for the response
    let response = await fetch(URL);
    console.log(response);
    //Convert the response into JSON format and wait for it
    let data=await response.json();
    //Set the fetched cat fact text into the paragraph element
    factPara.innerText=data.fact;
};

btn.addEventListener("click",getFacts);

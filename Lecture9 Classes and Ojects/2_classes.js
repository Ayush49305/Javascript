class ToyotaCar{

//Constructor is a special type of method that runs automatically when an object is created.we can see in line 16 and 17 their are two object that i have created so constructor called two times.

constructor(brand,mileage){
    console.log("Creating new object");
    this.brand=brand;
    this.mileage=mileage;
}
    start() {
        console.log("Car Started");
    }

    stop() {
        console.log("Car stopped");
    }
}
// Object
let fortuner = new ToyotaCar("fortuner",10);  //Here properties and method of ToyotaCar will use by this object.
console.log(fortuner);
let lexus = new ToyotaCar("lexus",16);
console.log(lexus);
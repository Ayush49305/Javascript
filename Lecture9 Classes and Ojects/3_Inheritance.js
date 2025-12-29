//Inheritance allows one class to use properties and methods of another class.
class Person{
    constructor () {
        this.species="Homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}

class Engineer extends Person{
    constructor(branch){
        super();   //To invoke parent class constructor
        this.branch=branch;
    }
    //If parent and child have same method then child method will be used.[MethodOverriding]
    work(){           
        console.log("Build something");
    }
}

let EngObj=new Engineer("Chemical Engineering");
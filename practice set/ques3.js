class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Website data");
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);   
    }

    editData(){
        console.log("Edited data")
    }
}
let student1= new User("Ayush","abc@gmail.com");
let student2= new User("Amit","www12@gmail.com");

let Admin1= new Admin("Superio","sup12@gmail.com");


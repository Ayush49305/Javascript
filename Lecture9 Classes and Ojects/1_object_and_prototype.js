// Way to create object

// const student={                        //created object
//     fullName:"Ayush Raj",              //properties
//     marks:97.5,                        //  ||
//     printMarks:function(){             //method
//         console.log("marks= ",this.marks);  //this keyword means talking about particular property which is inside same object
//     },
// };


//Prototype:A prototype is a object from which other objects inherit properties
const employee={
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const Karan={
    salary:50000,
};

const Sumit={
    salary:90000,
    calcTax(){
        console.log("Tax is 23%");
    },
};

Karan.__proto__ = employee;  //By using __proto__ we are adding the properties of employee object in karan and  sumit object.
Sumit.__proto__ = employee;  /* If object and prototype have same method,object's method will use.Here we are adding the method of employee object that is calTax() but Sumit has already a calTax() method,In this case object's method will use.*/
// console.log("Hello ")

// let a = {
//     name: "parth",
//     sname: "Desai",
// }
// // console.log(a);
// let p ={ 
//     run : () => {
//         alert("It is working!")
//     }
// }
// a.__proto__ = p;
// a.run();


// class form {
//     constructor(yourname){
//         this.name = yourname;

//         console.log("yor name is "+this.name)

//     }
//     sub = () => {
//         console.log(this.name +"form is been submited!")
//     }
//     cel(){
//         console.log(this.name + " form is been cencel!")
//     }
    
// }

// class panna extends form {
//     pec(){
//         console.log("a form submit thai chhe")
//     }
//     cel(){
//         super.cel();
//         console.log("super is working")
//     }
// }

// let parth = new form("parth");

// let raj = new form("raj");
// let jai = new panna("jai")

// parth.sub();
// jai.cel();
// jai.pec();


class Employee {
    constructor(name) {
      this.name = name
      console.log(`${name} - Employee's constructor is here`)
    }
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`This is a newly written constructor`)
    }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  
    }
  }


  let parth = new Programmer("Parth");
  parth.login();
  parth.requestLeaves();
  parth.logout();

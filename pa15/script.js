// console.log("Hello")

class parth {
    constructor(name){
        this.name = parth.aupperCase(name);
    }

    animal() {
        console.log("animal name is "+ this.name)
    }
    static aupperCase(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.lenght)
    }
}

let a = new parth("Monkey")

a.animal();
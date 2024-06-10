// const a = async(text, n=2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 1000 *n);
//     })
// }

// (
//     async() => {
//         let b = await a("parth", 5)
//         console.log(b)
//         let c = await a("raj")
//         console.log(c)

//     }

// )()

// function sum (a,b,c,d) {
//     return a+b+c+d
// }


// let s = [1,2,3,10]
// console.log(sum(...s))

class password {
    constructor() {
        console.log("genreat your password");
        this.pass = "";
    }

    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()";
        if (len < 3) {
            console.log("plese increrase lenth");
        } else {
            let i = 0
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i = i + 3;
            }
            this.pass = this.pass.substr(0, len)
            return this.pass
        }
    }
}

let a = new password();
console.log(a.generatePassword(10));
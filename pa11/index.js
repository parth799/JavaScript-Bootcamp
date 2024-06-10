
// let Parth = new Promise(function(resolve,reject){
//     console.log("this is Promise state!");
//     resolve(12)
// })

// console.log("Hello1");

// setTimeout(function(){
//     console.log("Hello2 in Three second")
// },3000);

// console.log("Hello3")
// console.log(Parth)


let A = new Promise((resolve, reject) => {
    console.log("1");
    setTimeout(() => {
        const pa = "2!"
        console.log("!3");
        resolve(pa);
    }, 3000)
}).then((value) => {
    console.log(value);
    let B = new Promise((resolve, reject) => {
        console.log("4");
        setTimeout(() => {
            const pa = "5!"
            console.log("6");
            resolve(pa);
        }, 3000)
    }).then((value) => {
        console.log(value);
    })
})



let C = new Promise((resolve, reject) => {
    console.log("7");
    setTimeout(() => {
        console.log("!8");
        reject(new Error("it is au error9"));
    }, 3000)
})


C.catch((value) => {
    console.log("some error");
})
async function Part() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("value 1");
            resolve("value 1");
        }, 1000);
    });
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("value 2");
            resolve("value 2");
        }, 2000);
    });
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("value 3");
            resolve("value 3");
        }, 3000);
    });

    let d = await p1;
    let e = await p2;
    let f = await p3;
    return [d, e, f];
}

async function ravi() {
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("value 4");
            resolve("value 4");
        }, 5000);
    });
    let g = await p4;
    return g;
}

async function vikash() {
    let g = await Part();
    let e = await ravi();

    g.forEach((value) => {
        console.log(value);
    });

    console.log(e);
}

vikash();



// let P = Promise.all([p1,p2,p3])

// P.then((val) =>{
//     console.log(val)
// })


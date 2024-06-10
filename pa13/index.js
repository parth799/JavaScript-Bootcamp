// let p = fetch("https://goweather.herokuapp.com/weather/Ny")

// p.then((v1) => {
//     return v1.json()
// }).then((v2) => {
//     console.log(v2)
// })
const p = async (todo) => {
    let option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            todo
        })
    }

    let a = await fetch("https://jsonplaceholder.typicode.com/posts", option);
    let r = await a.json();
    return r;
}

const b = async () => {
    let todo = {
        title: "foodgfdgg ",
    body: "bgfdfdfgdar",
    userId: 1}
    console.log(todo) 
}

b();
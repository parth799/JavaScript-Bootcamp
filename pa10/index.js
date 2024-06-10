
const Parth = (src, callback) => {

     var Script = document.createElement("script");
     Script.src = src;
     Script.onload = function(){
        console.log("Script load successfully!")
        callback(null, src);
     }
     Script.onerror = function(){
        console.log("Script error load successfully! :: ")
        callback(new error( "error is :: "));
     }
     document.body.appendChild(Script);
}
function ravi(error, src){
    alert("It is work" + src);
    if (error) {
        console.log(error);
    }
}
function khavi(){
    alert("It is not  work");
}
Parth("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js", ravi);   
                      
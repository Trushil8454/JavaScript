// console.log("stat")

// setTimeout(function(){
//     console.log("i am in asnyc")
// },3000)

// console.log("end")

function loadscript(src,callback){
    var script = document.createElement("script");
    script.src = src;

    script.onload = function(){
        console.log("load script with src"+src)
        callback(src);
    }

    document.body.appendchild(script);
}

function hello(src){
    console.log("say hello" + src);
}
function goodmorning(src){
    console.log("good morning"+src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)
setTimeout(function(){
    console.log("Work 1");
    setTimeout(function(){
        console.log("Work 2");
    }, 1000);
}, 1000);
console.log("End");


new Promise(function(resolve, reject){
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
});
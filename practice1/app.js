function helloWorld(){
    console.log('hello world')
}

let heyThere = function(){
    console.log('Hey there')
}

let sum =  function (val1,val2) {
    return val1 + val2;
}

heyThere();

let result = sum(5,5);
console.log(result);
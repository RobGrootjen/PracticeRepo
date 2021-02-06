function containsAll(arr){
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
        
    }
    return true;
}

let x = [2,4,6,7];
console.log(containsAll(x,2,4,7));
console.log(containsAll(x,6,4,9));



function magic(...nums){
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum
}
console.log(magic(1,2,3,4,5,6));



function myFunction(w, x, y, z){
    console.log(w + x + y + z);
}
var args = [1,2,3];
myFunction.apply(null, args.concat(4));




const myFunction2 = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args2 = [1, 2, 3];
myFunction2(...args2, 4);



var dateFields = [1970, 0, 1];
var date = new Date(...dateFields);
console.log(date);
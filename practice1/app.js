var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id);
console.log(age);
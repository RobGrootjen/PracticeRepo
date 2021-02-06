const map = new Map();
map.set('one',1);
map.set('2','two');
if (map.has('two')){
    console.log('two');
}else{
    console.log(map.get('one'));
}






let set = new Set([1,2,4,2,59,9,4,9,1]);
console.log(set.size);




let set2 = new Set();
set2.add(5).add(9).add(59).add(9);
console.log(set2.has(9));
for (let v of set2.values())
    console.log(v);
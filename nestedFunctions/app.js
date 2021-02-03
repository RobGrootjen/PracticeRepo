function calcAvg(a,b,c) {
    
    function calculateTotal(a,b,c) {
        return a + b + c;
    }
    return calculateTotal(a,b,c)/3;
}
console.log(calcAvg(10,20,30));
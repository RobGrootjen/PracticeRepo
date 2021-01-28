function calculateClass(math,phy,geo){
    var result = math + phy + geo;
    return result;
}

function calculatePer(result){
    var percentage = result/300 * 100;
    console.log(percentage);
}



calculatePer(calculateClass(90,94,85));
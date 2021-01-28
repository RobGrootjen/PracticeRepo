function calculateGrade(grade1,grade2,grade3) {
    var finalScore = grade1 + grade2 + grade3;
    return finalScore;
}

function calculatePercentage(finalScore){
    var result = finalScore / 300 * 100;
    console.log(result);
}

calculatePercentage(calculateGrade(75,92,45));
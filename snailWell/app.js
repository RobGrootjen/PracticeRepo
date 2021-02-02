function snailWell(){
    var days = 0;
    var miles = 0;
    var distanceUp = 7;
    var slipBack = 2;
    var distance = prompt("How many miles would you like to calculate?");
    while (miles <= distance) {
        days++;
        miles += distanceUp;
        if (miles < distance) {
            miles -= slipBack;
        }
        console.log(days);
    }
}

snailWell();
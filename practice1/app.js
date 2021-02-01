function askForName(){
    let distance = prompt('Input the distance, and I\'ll calculate the time in minutes.');
    var milesPH = 40;
    var firstResult = distance / milesPH;
    var secondResult = firstResult * 60;
    alert('It takes ' + secondResult + ' minutes to drive ' + distance + 'miles!');


    
}

askForName();
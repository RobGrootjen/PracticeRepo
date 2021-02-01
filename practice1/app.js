function askForName(){
    let passWord = prompt('What is the password of your bank account?');
    if (passWord === 'Lenovo123') {
        let helpResponse = prompt('Password is right, what would you like to do? \n1. Check balance. \n2. Make a payment \n3. Transfer');
        if (helpResponse == 1) {
            alert('Your balance is $1230.12')
        }
        if (helpResponse == 2) {
            let makePayment = prompt('How much would you like to pay?')
        }
        if (helpResponse == 3){
            let whoTransfer = prompt('Who would you like to transfer to?')      
        }
    }else{
        alert('Password is super wrong')
    }
    
}

askForName();
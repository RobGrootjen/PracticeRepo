function askForName(){
    let passWord = prompt('What is the password?');
    if (passWord === 'Lenovo123') {
        let helpResponse = prompt('Password is right, how can I help you? \n1. Balance.');
    }else{
        alert('Password is wrong')
    }
    
}

askForName();
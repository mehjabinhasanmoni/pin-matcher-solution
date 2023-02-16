function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 4 igit found',pin);
        return getPin();
    }

}

function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    console.log(pin);

    // Display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click',function(event){
    console.log(event.target.innerText);
})


function getPin(){
    const pin = generatePin();
    const pinString = pin + "";
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate').addEventListener('click', function(){
    const pinField =document.getElementById('pin-field');
    const pin = getPin();
    pinField.value = pin;
})



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
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-field');
    const previousTypedNumber = typedNumber.value;
    if(isNaN(number)){
        if(number === "C"){
            typedNumber.value ="";
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const digit = digits.join('');
            typedNumber.value = digit;
        }
        
    }
    else{
        const currentTypedNumber = previousTypedNumber + number;
        typedNumber.value = currentTypedNumber;
    }
})
document.getElementById('verify').addEventListener('click', function(){
    const pinField =document.getElementById('pin-field');
    const typedNumber = document.getElementById('typed-field');
    
    const pinTrue = document.getElementById('pin-true');
    const pinFalse = document.getElementById('pin-false');
    if(pinField.value === typedNumber.value){
        pinTrue.style.display = 'block'
        pinFalse.style.display = 'none'
    }
    else{

        pinFalse.style.display = 'block'
        pinTrue.style.display = 'none'
    }
})
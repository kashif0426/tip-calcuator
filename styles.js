const amount = document.getElementById('amount')
const gest = document.getElementById('gests')
const quality = document.getElementById('quality')
const tipAmount = document.getElementById('tip-amount')

//calculate = () =>{} <same> function calculate(){}

function calculate(){
    const tip = ((amount.value * quality.value / (gests.value))).toFixed(2);
    amount.value = '';
    gest.value = '';
    quality.value = '';
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }

    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount();
    }
}

function showTipAmount(){
    let x = tipAmount;
    x.className = 'show';
    setTimeout =(function(){
        x.className = x.className.replace('show','');
    }, 3000)
}
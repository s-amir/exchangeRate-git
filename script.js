const currencyEl_1=document.getElementById('currency-one');
const currencyEl_2=document.getElementById('currency-two');
const amountEl_1=document.getElementById('amount-one');
const amountEl_2=document.getElementById('amount-two');
const rateEl=document.getElementById('rate');
const swapEl=document.getElementById('swap');


function calculate(){
var currencyValue1=currencyEl_1.value;
const currencyValue2=currencyEl_2.value;
fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValue1}`).then(res=>res.json())
.then(data=>{
    console.log(data);
const rate=data.rates[currencyValue2]; //why we dont nedd quotes?
console.log(rate);
rateEl.innerHTML=`1 ${currencyValue1} = ${rate} ${currencyValue2}`
amountEl_2.value=(amountEl_1.value)*rate
    

})
}

calculate();
//add eventListener
currencyEl_2.addEventListener('change',calculate);
currencyEl_1.addEventListener('change',calculate);
amountEl_1.addEventListener('input',calculate);
amountEl_2.addEventListener('input',calculate);

swapEl.addEventListener('click' , ()=>{
const temporary=currencyEl_1.value;
currencyEl_1.value=currencyEl_2.value;
currencyEl_2.value=temporary;
calculate();

})
var billAmount=document.querySelector("#bill-Input")
var nextBtn= document.querySelector("#next-btn")
var cashDiv=document.querySelector("#cash-div")
var cashAmount=document.querySelector("#cash-input")
var calculateBtn=document.querySelector("#calculate-btn")
var message=document.querySelector("#errorMsg")
var resultEl=document.querySelector("#result")
var noOfNotes=document.querySelectorAll(".no-of-notes")

var currency=[2000,500,100,50,10,5,1]

cashDiv.style.display="none";
resultEl.style.display="none";
message.style.display="none"

nextBtn.addEventListener("click",()=>{
    hideError()
    cashDiv.style.display="block";
})

calculateBtn.addEventListener("click",()=>{

    
    if (billAmount.value>0 && cashAmount.value>0){
        if (Number(billAmount.value)<=Number(cashAmount.value)){
            nextBtn.style.display="none"
            var amount=cashAmount.value-billAmount.value;
            showAmountToBeReturned(amount)
            calculateBtn.style.display="none"
        }else{
            showMessage("Be ready to wash plates")
        }
    }else{
        showMessage("Invalid Amount")
    }
})

function showAmountToBeReturned(balance){
    message.style.display="block";
    message.innerText="Return Change: "+ balance;
    resultEl.style.display="block";
    for (let i=0;i<currency.length;i++){
        notes=Math.trunc(balance/currency[i]);
        balance=balance%currency[i];
        noOfNotes[i].innerText=notes;
    }
}

function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}



function hideError(){
    message.style.display="none"
}
const submitBtn= document.getElementById("submitBtn");
submitBtn.addEventListener('click', function(){
    email= document.getElementById('email').value;
    password= document.getElementById('password').value;

    if( email== 'rizveove973@gmail.com' && password== 1234){
        document.getElementById("login-section").style.display= "none";
        document.getElementById("transactionSection").style.display= "block";
    } else{
        document.getElementById("messege").style.display= "block";

    }

   
});

function getNumberText(id){
    let amount= document.getElementById(id).innerText;
    let amountNumber= parseFloat(amount);
    return amountNumber;
};

function getNumberValue(id){
    let amount= document.getElementById(id).value;
    let amountNumber= parseFloat(amount);
    return amountNumber;
};

function setText(id, amount1, amount2){
    let totalAmount= amount1+ amount2;
    document.getElementById(id).innerText= totalAmount;
};

const depositBTN= document.getElementById("depositBtn");
depositBTN.addEventListener('click', function(){
    let deposit= getNumberText("oldDeposit");
    let newDeposit= getNumberValue("depositAmount");
    let oldBalance= getNumberText("balance");
    setText("oldDeposit", deposit, newDeposit);
    setText("balance", oldBalance, newDeposit);
    document.getElementById("depositAmount").value= "";
});

const withdrawBtn= document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click', function(){
    let Withdraw= getNumberText("oldWithdraw");
    let newWithdraw= getNumberValue("withdrawAmount");
    let oldBalance= getNumberText("balance");
    setText("oldWithdraw", Withdraw, newWithdraw);
    setText("balance", oldBalance, -1*newWithdraw);
    document.getElementById("withdrawAmount").value= "";
});
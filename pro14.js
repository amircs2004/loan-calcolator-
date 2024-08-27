


function calcolatLoan() {
 //1th we need to get the values from the html files using thtse methods
    loanValue = document.getElementById("amount").value ;
   interestValue = document.getElementById("interset").value;
   monthsValue = document.getElementById("months").value;
 
   intrests = (loanValue *  (interestValue * 0.01))/monthsValue
  monthlyPayment = (loanValue / monthsValue * intrests).toFixed(2)
  document.getElementById("payPay").innerHTML = `monthly payment : ${monthlyPayment}`
}

// Global Variable
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const inputCvc = document.getElementById("cvc");



function validateForm(){
// form validate
// Variables
// selecting the input variable and button

let errorMsg = document.getElementById("errorMsg");

// Name input field
if (inputName.value == null || inputName.value == '' || inputName.value == " " ){
     inputName.value = "*** Name can't be empty.";
     inputName.style.color = "red";
     inputName.style.fontSize = "10px";
     return;
     }

if (!isNaN(inputName.value[0])){
     inputName.value = "*** Name Can't have number or start with number.";
     inputName.style.color = "red";
     inputName.style.fontSize = "10px";
     return;
     }

if(inputName.value.length > 25){
     inputName.value = "*** Name can't be more than 16 character";
     inputName.style.color = "red";
     inputName.style.fontSize = "10px";
     return;
} 

// Input Number field

if (inputNumber.value == null || inputNumber.value == '' || inputNumber.value == " " ){
     inputNumber.value = "*** Number can't be empty.";
     inputNumber.style.color = "red";
     inputNumber.style.fontSize = "10px";
     return;
     }

if(inputNumber.value.length > 16){
     inputNumber.value = "*** Enter your 16 digits card number.";
     inputNumber.style.color = "red";
     inputNumber.style.fontSize = "10px";
     return;
} 

if(isNaN(inputNumber.value)){
     inputNumber.value = "*** Only number Allow.";
     inputNumber.style.color = "red";
     inputNumber.style.fontSize = "10px";
     return;
}

if (expMonth.value == null || expMonth.value == '' || expMonth.value == " " ){
     errorMsg.textContent = "*** Please enter MONTH";
     return;
     } 

if(expMonth.value.length > 2 || expMonth.value > 12){    
     errorMsg.textContent = "*** INVALID MONTH";
     console.log(errorMsg.textContent);
     return;
}

     
if (expYear.value == null || expYear.value == '' || expYear.value == " " ){
     errorMsg.textContent = "*** Please enter YEAR";
     console.log(errorMsg.textContent);
     return;
     }  

if(expYear.value.length > 4){    
     errorMsg.textContent = "*** INVALID YEAR";
     console.log(errorMsg.textContent);
     return;
}

if (inputCvc.value == null || inputCvc.value == '' || inputCvc.value == " " ){
     errorMsg.textContent = "*** Please enter your CVC number.";
     console.log(errorMsg.textContent);
     return;
     } 

if(isNaN(inputCvc.value)){
     errorMsg.textContent = "*** INVALID CVC";
     console.log(errorMsg.textContent);
     return;
}
if(inputCvc.value.length > 3){
     errorMsg.textContent = "*** INVALID CVC";
     console.log(errorMsg.textContent);
     return;
}

else{
     cardRetrive();
}

}

function cardRetrive(){
     //Card data retrive from form 
// Variable
let outputCardNo = document.getElementById("card-no");
let outputCardName = document.getElementById("name");
let outputExpiery = document.querySelector(".exp-date");
let outputCardCvc = document.getElementById("card-cvc");


outputCardName.textContent = inputName.value;
inputName.value = "";
outputCardNo.textContent = inputNumber.value;
inputNumber.value = "";
outputExpiery.textContent= expMonth.value + "/ " + expYear.value;
expMonth.value = "";
expYear.value = "";
outputCardCvc.textContent = inputCvc.value;
inputCvc.value = "";

let thanksMsg = document.querySelector(".thanks-container");
let continueBtn = document.querySelector(".continue");
thanksMsg.classList.toggle("active");
continueBtn.addEventListener("click",function(){
     thanksMsg.classList.remove("active");
     outputCardName.textContent = "JANE APPLESEED";
     outputCardNo.textContent = "0000 0000 0000 0000";
     outputExpiery.textContent= "00" + "/ " + "00";
     outputCardCvc.textContent = "000";
     
     
})

}




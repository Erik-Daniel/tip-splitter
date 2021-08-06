const total = document.getElementById("total");
const people = document.getElementById("people");
const result = document.getElementById("result");
const tip = document.getElementById("tip-input");
const tipTotal = document.getElementById("total-tip");
let finalValue = 0;
let peopleValue = 0;
const maxValue = 99999999999999;

total.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tip.addEventListener("input",calculate);


function calculate() {
    if(checkInput()){
        
        let totalValue = total.value;
        let tipValue = tip.value;
        peopleValue = people.value;

        let calculation1 = totalValue * (tipValue / 100); 
        let calculation2 = calculation1 / peopleValue;
         finalValue = calculation2.toFixed(2);
        result.style.visibility = "visible";
        tipTotal.textContent =  "Total Tip: $" + calculation1.toFixed(2) ;
        updateResult();
    }
    else {
        tipTotal.textContent = "Total Tip: $0.00";
        peopleValue = 0;
        finalValue = 0;
        updateResult();

    }
    
}


function checkInput() {
    if(total.value != "" && total.value != 0 &&  
     people.value != "" && people.value != 0 &&
     tip.value != "" && tip.value != 0) {
         return true;
     }
     else {
         return false
     }
}

function updateResult()  {
    let peopleBold = document.createElement("b");
    peopleBold.textContent = peopleValue;
    
    let moneyBold = document.createElement("b");
    moneyBold.textContent = finalValue;
    
    let text1 = document.createTextNode(" people have to pay $");
    result.textContent = "";
    result.appendChild(peopleBold);
    result.appendChild(text1);
    result.appendChild(moneyBold)
}
let total = document.getElementById("total");
let people = document.getElementById("people");
let result = document.getElementById("result");
let tip = document.getElementById("tip-input");

total.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tip.addEventListener("input",calculate);


function calculate() {
    if(total.value != 0 && people.value != 0 && tip.value != 0){
    let totalValue = total.value;
    let tipValue = tip.value;
    let peopleValue = people.value;

    let calculation1 = totalValue * (tipValue / 100); 
    let calculation2 = calculation1 / peopleValue;
    let finalValue = calculation2.toFixed(2);

    result.style.visibility = "visible";
    result.textContent = people.value + " people have to pay $" + finalValue + " dollars";
    
}

}
let billAmountElement = document.querySelector("#bill-amount");
let percentageAmountElement = document.querySelector("#tip-percentage");
let totalAmountOutput = document.querySelector("#total-amount");

function calculateTotal(event) {
  event.preventDefault();
  let billAmount = parseFloat(billAmountElement.value); //Parsing Values: The billAmount and tipPercentage values are parsed as floats using parseFloat to ensure numerical calculations.
  let tipPercentage = parseFloat(percentageAmountElement.value) / 100;
  let totalAmount = billAmount + billAmount * tipPercentage;
  totalAmountOutput.textContent = totalAmount.toFixed(2);
}

let calculateButton = document.querySelector("#calculate-btn");
calculateButton.addEventListener("click", calculateTotal);

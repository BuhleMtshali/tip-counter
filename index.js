let billAmountElement = document.querySelector("#bill-amount");
let percentageAmountElement = document.querySelector("#tip-percentage");
let totalAmountOutput = document.querySelector("#total-amount");

function calculateTotal(event) {
  event.preventDefault();
  percentageAmountElement = percentageAmountElement.value / 100;
  totalAmountOutput = billAmountElement.value + percentageAmountElement;
}

let calculateButton = document.querySelector("#calculate-btn");
calculateButton.addEventListener("click", calculateTotal);

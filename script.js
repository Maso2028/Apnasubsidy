
function selectOperator(operator) {
  document.getElementById("operator").value = operator;
  alert("Selected Operator: " + operator);
}

function submitRecharge(e) {
  e.preventDefault();
  const number = document.getElementById("number").value;
  const amount = document.getElementById("amount").value;
  const operator = document.getElementById("operator").value;

  if (!operator) {
    alert("Please select an operator first!");
    return;
  }

  document.getElementById("result").innerText = "Processing Recharge...";
  
  // Simulated API Request (replace with real MyRC API)
  setTimeout(() => {
    document.getElementById("result").innerText = 
      `Recharge successful for ${number} (${operator}) with ₹${amount}`;
  }, 2000);
}

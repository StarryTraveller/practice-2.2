let calculation = "";
function updateCalculation(button) {
  calculation += button;
  console.log(calculation);
  displayCalculation();
}
function evaluateCalculation() {
  calculation = eval(calculation);
  console.log(calculation);
  displayCalculation();
}
function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}

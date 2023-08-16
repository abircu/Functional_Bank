// step01: *button clickable functionality add  **get input text *** input text convert number
document.getElementById("deposit-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("ipnut-amount");
  const inputNumberString = inputValue.value;
  const inputNumber = parseFloat(inputNumberString);
  //   clear the input field
  inputValue.value = "";

  //   step 02: add deposit button functionality
  const getDeposittext = document.getElementById("Deposit-total");
  const getDepositString = getDeposittext.innerText;
  const depositNumber = parseFloat(getDepositString);

  //   step 03: Addition input value of deposit box
  const addDeposit = inputNumber + depositNumber;
  getDeposittext.innerText = addDeposit;
});

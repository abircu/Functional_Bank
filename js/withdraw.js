document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInputField = getInputValueById("withdraw-amount");
  const withdrawTextBox = getInputTextById("Withdraw-total");
  const withdrawBalanceTotal = getInputTextById("Balance-total");
  const addWithdrawAmount = withdrawInputField + withdrawTextBox;
  const totalBalance = withdrawBalanceTotal - withdrawInputField;
  setTextElementByValue("Withdraw-total", addWithdrawAmount);
  setTextElementByValue("Balance-total", totalBalance);
});
// withdraw functionality is complete

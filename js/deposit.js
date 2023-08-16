document.getElementById("deposit-btn").addEventListener("click", function () {
  //  deposit input field
  const newDepositAmount = getInputValueById("ipnut-amount");
  // deposit text field
  const depositNumberTotal = getInputTextById("Deposit-total");
  //   add text and iput field
  const addTotalDepositNumber = newDepositAmount + depositNumberTotal;

  //   total balace called function
  const balanceTotalNumber = getInputTextById("Balance-total");
  //   add total balance
  const balaceTotal = balanceTotalNumber + newDepositAmount;
  //   set value in total valance function
  setTextElementByValue("Balance-total", balaceTotal);
  setTextElementByValue("Deposit-total", addTotalDepositNumber);
});

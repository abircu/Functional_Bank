// // step01: *button clickable functionality add  **get input text *** input text convert number
// document.getElementById("deposit-btn").addEventListener("click", function () {
//   const inputValue = document.getElementById("ipnut-amount");
//   const inputNumberString = inputValue.value;
//   const inputNumber = parseFloat(inputNumberString);
//   //   clear the input field
//   inputValue.value = "";

//   //   step 02: add deposit button functionality
//   const getDeposittext = document.getElementById("Deposit-total");
//   const getDepositString = getDeposittext.innerText;
//   const depositNumber = parseFloat(getDepositString);

//   //   step 03: Add input value of deposit box
//   const addDeposit = inputNumber + depositNumber;
//   getDeposittext.innerText = addDeposit;

//   //   step 04: upgrade balance calculation
//   const balanceElement = document.getElementById("Balance-total");
//   const balaceTotalElementString = balanceElement.innerText;
//   const balaceTotal = parseFloat(balaceTotalElementString);

//   //   step 05:Total balance add of input field
//   const totalBalanceAdd = balaceTotal + inputNumber;
//   balanceElement.innerText = totalBalanceAdd;
// });

// // withdraw button functionality here
// // step 01:withdraw button clickable function
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   //  step 02:withdraw input  functionality
//   const withdrawInputElement = document.getElementById("withdraw-amount");
//   const withdrawInputElementString = withdrawInputElement.value;
//   //   step 2.5:convert withdraw inpu text to number
//   const withdrawAmountNumber = parseFloat(withdrawInputElementString);
//   withdrawInputElement.value = "";

//   //   step 03:withdraw box functionality
//   const withdrawBoxElement = document.getElementById("Withdraw-total");
//   const withdrawBoxElementString = withdrawBoxElement.innerText;
//   const withdrawAmountTotal = parseFloat(withdrawBoxElementString);

//   //   step 04:withdraw amount add on withdraw box
//   const additionWithdraw = withdrawAmountNumber + withdrawAmountTotal;
//   withdrawBoxElement.innerText = additionWithdraw;

//   // step 05:balace box functionality
//   const balanceBoxElement = document.getElementById("Balance-total");
//   const balanceBoxElementString = balanceBoxElement.innerText;
//   const balaceTotalElementNumber = parseFloat(balanceBoxElementString);

//   //   step 06:calculation final step of substruction of withdraw amount
//   const withdrawAmountSub = balaceTotalElementNumber - withdrawAmountNumber;
//   balanceBoxElement.innerText = withdrawAmountSub;
// });

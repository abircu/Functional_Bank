function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function setTextElementByValue(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

function getInputTextById(inputText) {
  const getInputTextField = document.getElementById(inputText);
  const getInputTextFieldString = getInputTextField.innerText;
  const textFieldValue = parseFloat(getInputTextFieldString);
  return textFieldValue;
}

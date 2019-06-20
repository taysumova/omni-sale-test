const passwordInput = document.getElementsByClassName("input--password")[0];
let actualPassword = [];

passwordInput.addEventListener("input", (event) => replacePassword(event));

function replacePassword(event) {
  let passwordValue = passwordInput.value;
   console.log(event);
  if(passwordValue && event.inputType !== "deleteContentBackward") {
    actualPassword.push(passwordValue[passwordValue.length - 1]);
    passwordInput.value = actualPassword.map(i => i = "*").join('');
  } else if (event.inputType === "deleteContentBackward") {
    actualPassword.pop();
  }
  console.log(actualPassword);
}
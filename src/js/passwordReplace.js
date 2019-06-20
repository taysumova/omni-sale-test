let actualPassword = [];

passwordInput.addEventListener("input", (event) => replacePassword(event));

const replacePassword = (event) => {
  let passwordValue = passwordInput.value;
  if(passwordValue && event.inputType !== "deleteContentBackward") {
    actualPassword.push(passwordValue[passwordValue.length - 1]);
    passwordInput.value = actualPassword.map(i => i = "*").join('');
  } else if (event.inputType === "deleteContentBackward") {
    actualPassword.pop();
  }

  if(passwordValue.length) {
    passwordInput.classList.add('input--password-active');
  } else {
    passwordInput.classList.remove('input--password-active');
  }
}
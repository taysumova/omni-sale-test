const passwordInput = document.getElementsByClassName("input--password")[0];
let actualPassword = [];

passwordInput.addEventListener("keyup", (event) => replacePassword(event));

function replacePassword(event) {
  let passwordValue = passwordInput.value;
  if(passwordValue && event.key !== "Backspace") {
    actualPassword.push(passwordValue[passwordValue.length - 1]);
    passwordInput.value = actualPassword.map(i => i = "*").join('');
  } else if (event.key === "Backspace") {
    actualPassword.pop();
  }
  console.log(passwordValue + " :val");
  console.log(actualPassword + " :actual");
}
loginButton.addEventListener("click", (e) => submitLoginForm(e));

const submitLoginForm = (e) => {
    const rememberMeInput = document.getElementsByClassName("switch__checkbox")[0].checked;
    
    e.preventDefault();
    console.log(rememberMeInput);
    console.log(actualPassword.join(''));
    console.log(numberInput.value);
}

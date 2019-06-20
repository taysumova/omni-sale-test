const numberInput = document.getElementsByClassName("input--number")[0];
const passwordInput = document.getElementsByClassName("input--password")[0];
const loginButton = document.getElementsByClassName("button")[0];

let isNumberValid = false;
let isPasswordValid = false;

numberInput.addEventListener("blur", () => doNumberValidation());
passwordInput.addEventListener("input", () => doPasswordValidation());

const setBtnStatus = () => {
    if (isNumberValid && isPasswordValid) {
        loginButton.classList.add('button--active');
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.classList.remove('button--active');
        loginButton.setAttribute('disabled', 'disabled');
    }
}

const doNumberValidation = () => {
    let numberValue = numberInput.value;
    let numRegExp = /^[8]{1}\s\(\s[\d]{3}\s\)\s[\d]{3}\-[\d]{2}\-[\d]{2}$/;
    if(!numRegExp.test(numberValue)) {
        numberInput.classList.remove("input--checked");
        numberInput.classList.add("input--invalid");
        isNumberValid = false;
    } else {
        numberInput.classList.remove("input--invalid");
        numberInput.classList.add("input--checked");
        isNumberValid = true;
    }

    setBtnStatus();
}

const doPasswordValidation = () => {
    let passwordValue = passwordInput.value;
    if (passwordValue.length < 5) {
        isPasswordValid = false;
    } else {
        isPasswordValid = true;
    }

    setBtnStatus();

}
const numberInput = document.getElementsByClassName("input--number")[0];
const passwordInput = document.getElementsByClassName("input--password")[0];
const loginButton = document.getElementsByClassName("button")[0];

let isNumberValid = false;
let isPasswordValid = false;

numberInput.addEventListener("blur", () => doNumberValidation());
numberInput.addEventListener("input", (e) => autocompleteNumber(e));
passwordInput.addEventListener("input", () => doPasswordValidation());

const autocompleteNumber = (e) => {
    numberInput.setAttribute('maxlength', 19);
    e.preventDefault();
    let numberValue = numberInput.value;
    const numRegExp = /[a-zа-яё0-9]/gi;
    if (numberValue) {
        let numberCount = numberValue.match(numRegExp).length;
        const numberArr = []
            for(let i = 0; i < numberValue.length; i++) {
                numberArr.push(numberValue[i]);
            }
        const onlyNumArr = numberArr.filter(num => num.match(numRegExp));
        switch(numberCount) {
            case 2:
            case 3:
            case 4:
                onlyNumArr.splice(1, 0, ' ( ');
                break;
            case 5:
            case 6:
            case 7:
                onlyNumArr.splice(1, 0, ' ( ');
                onlyNumArr.splice(5, 0, ' ) ');
                break;
            case 8:
            case 9:
                onlyNumArr.splice(1, 0, ' ( ');
                onlyNumArr.splice(5, 0, ' ) ');
                onlyNumArr.splice(9, 0, '-');
                break;
            case 10:
            case 11:
                onlyNumArr.splice(1, 0, ' ( ');
                onlyNumArr.splice(5, 0, ' ) ');
                onlyNumArr.splice(9, 0, '-');
                onlyNumArr.splice(12, 0, '-');
                break;
            default:
                onlyNumArr.splice(12, onlyNumArr.length - 1);
    
        }
        numberInput.value = onlyNumArr.join('');
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

    if (isNumberValid && isPasswordValid) {
        loginButton.classList.add('button--active');
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.classList.remove('button--active');
        loginButton.setAttribute('disabled', 'disabled');
    }
}

const doPasswordValidation = () => {
    let passwordValue = passwordInput.value;
    if (passwordValue.length < 5) {
        isPasswordValid = false;
    } else {
        isPasswordValid = true;
    }

    if (isNumberValid && isPasswordValid) {
        loginButton.classList.add('button--active');
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.classList.remove('button--active');
        loginButton.setAttribute('disabled', 'disabled');
    }
}
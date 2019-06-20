const numberInput = document.getElementsByClassName("input--number")[0];
const passwordInput = document.getElementsByClassName("input--password")[0];

numberInput.addEventListener("blur", () => doNumberValidation());
numberInput.addEventListener("input", (event) => autocompleteNumber(event));

const autocompleteNumber = (event) => {
    let numberValue = numberInput.value;
    console.log(event);
    if(event.inputType === "insertText")
    switch(numberValue.length) {
        case 1:
            numberInput.value += ' ( ';
            break;
        case 7:
            numberInput.value += ' ) ';
            break;
        case 13:
        case 16:
            numberInput.value += '-';
            break; 
    }
    console.log(numberValue);
}

const doNumberValidation = () => {
    let numberValue = numberInput.value;
    console.log(numberValue);
    let numRegExp = /^[\d]{1}\s\(\s[\d]{3}\s\)\s[\d]{3}\-[\d]{2}\-[\d]{2}$/;
    if(!numRegExp.test(numberValue)) {
        numberInput.classList.remove("input--checked");
        numberInput.classList.add("input--invalid");
    } else {
        numberInput.classList.remove("input--invalid");
        numberInput.classList.add("input--checked");
    }
}
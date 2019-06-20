numberInput.addEventListener("input", (e) => autocompleteNumber(e));
numberInput.setAttribute('maxlength', 19);

const autocompleteNumber = (e) => {
    e.preventDefault();

    const numRegExp = /[a-zа-яё0-9]/gi;
    const numberArr = [];

    let numberValue = numberInput.value;

    for(let i = 0; i < numberValue.length; i++) {
        numberArr.push(numberValue[i]);
    }

    if (numberValue) {
        const autocompletedNumberArr = numberArr.filter(num => num.match(numRegExp));
        let numberCount = numberValue.match(numRegExp).length;

        switch(numberCount) {
            case 2:
            case 3:
            case 4:
                autocompletedNumberArr.splice(1, 0, ' ( ');
                break;
            case 5:
            case 6:
            case 7:
                autocompletedNumberArr.splice(1, 0, ' ( ');
                autocompletedNumberArr.splice(5, 0, ' ) ');
                break;
            case 8:
            case 9:
                autocompletedNumberArr.splice(1, 0, ' ( ');
                autocompletedNumberArr.splice(5, 0, ' ) ');
                autocompletedNumberArr.splice(9, 0, '-');
                break;
            case 10:
            case 11:
                autocompletedNumberArr.splice(1, 0, ' ( ');
                autocompletedNumberArr.splice(5, 0, ' ) ');
                autocompletedNumberArr.splice(9, 0, '-');
                autocompletedNumberArr.splice(12, 0, '-');
                break;
            default:
                autocompletedNumberArr.splice(12, autocompletedNumberArr.length - 1);
    
        }
        numberInput.value = autocompletedNumberArr.join('');
    }
}
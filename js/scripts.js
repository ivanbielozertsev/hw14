let num = prompt('Введите число');
let degree = prompt('Введите степень');


function isValid(value) {
    return value && !isNaN(value);
}

function calc(x, y = 1) {
    if (!isValid(x) || !isValid(y)) {
        return 'some error';
    } 

    return (+x) ** (+y);
}

const result = calc(num.trim(), degree.trim());

alert(`result: ${result}`);

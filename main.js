const display = document.getElementById('display');

function appendValue(value) {
    if (value === '.') {
        if (display.value.includes('.')) {
            return;
        }
    }

    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}
function clearDisplay() {
    display.value = '0';
}
function calculate() {
    try {
        display.value = eval(display.value);
    }               
    catch (error) {
        display.value = 'Error';
    }   
}
function changeSign() {
    if (display.value !== '0') {
        display.value = Number(display.value) * -1;
    }
}
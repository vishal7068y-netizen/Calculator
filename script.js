const display = document.getElementById('display');
function addValue(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    if (operators.includes(value) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + value;
        return;
    }
    if (value === '.') {
        const parts = display.value.split(/[+\-*/%]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes('.')) {
            return;
        }
    }
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    if (display.value === '') {
        return;
    }
    try {
        const expression = display.value;
        if (/\/0(?!\.)/.test(expression)) {
            display.value = 'Cannot divide by zero';
            return;
        }
        const result = eval(expression);
        if (!Number.isFinite(result)) {
            display.value = 'Invalid Input';
            return;
        }
        display.value = result;
    } catch (error) {
        display.value = 'Invalid Input';
    }
}
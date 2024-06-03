function calculateModulus() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultSpan = document.getElementById('result');

    if (num1 === '' || num2 === '') {
        resultSpan.textContent = 'Please enter both numbers.';
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = 'Please enter valid numbers.';
        return;
    }

    var modulus = num1 % num2;
    resultSpan.textContent = modulus;
}

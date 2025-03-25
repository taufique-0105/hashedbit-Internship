function addDigits(num1, num2) {
    let sum = 0;
    while(num1 != 0 || num2 != 0) {
        const d1 = num1%10;
        const d2 = num2%10;

        sum += d1 * d2;
        num1 = Math.floor(num1/10);
        num2 = Math.floor(num2/10);
    }
    return sum;
}

const result = addDigits(6, 34);

console.log(result);
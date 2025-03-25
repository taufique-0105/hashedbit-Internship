function calculate(c, num1, num2){
    switch(c){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 == 0){
                throw new Error('Cannot divide by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}

console.log(calculate('-',12, 10))
console.log(calculate('*',12, 10))
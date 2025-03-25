function findTax(num){
    let tax;
    switch (true) {
        case (num > 0  && num <= 500000):
            tax = 0;     
            break;
        case (num > 500000  && num <= 1000000):
            tax = 0.1;
            break;
        case (num > 1000000  && num <= 1500000):
            tax = 0.2;
            break;
        case (num > 1500000):
            tax = 0.3;
            break;
        default:
            break;
    }
    return num * tax;
}

console.log(findTax(2400000))
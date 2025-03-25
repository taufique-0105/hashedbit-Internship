function filterEven(arr){
    return arr.filter(num => num % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = filterEven(numbers);

console.log(evenNumbers);
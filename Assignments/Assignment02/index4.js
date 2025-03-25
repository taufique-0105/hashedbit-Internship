function square(arr) {
    const squaredArr = arr.map(num => num ** 2);
    return squaredArr;
}

const arr = [13, 14, 15, 16, 17, 18, 19, 20, 21]

console.log(square(arr));
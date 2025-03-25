const arr = [3, 4, 5, 6, 7, 8, 9, 10, 11]

function sum(arr){
    return arr.reduce((pre, curr) => pre + curr)
}

console.log(sum(arr))
function modifyArray(arr) {
    arr.push("newElement");
    arr.pop();
    return arr; 
}

let myArray = [1, 2, 3];
let arr = modifyArray(myArray);
console.log(arr);
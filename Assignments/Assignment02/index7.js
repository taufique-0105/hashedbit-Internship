function areaRectangle (rectangle){
    return rectangle.length * rectangle.width;
}

const rectangle = {
    length: 5,
    width: 10
}

console.log(areaRectangle(rectangle));
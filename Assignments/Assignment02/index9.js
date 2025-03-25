const obj1 = {
    name: 'John',
    age: 25,
    city: 'New York'
}

const obj2 = {
    occupation: "Software Engineer",
    salary: 80000,
    company: "XYZ Corp"
}

function mergeObjects(obj1, obj2) {
    const obj3 = Object.assign(obj1, obj2);
    return obj3;
}

console.log(mergeObjects(obj1, obj2));
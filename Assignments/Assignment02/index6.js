const person = {
    name: 'Rahul',
    age: 22,
    occupation: "Software Engineer"
}

function greeting(person) {
    console.log(`Hello, my name is ${person.name}. I am ${person.age} years old and my occupation is ${person.occupation}.`);
}

greeting(person);
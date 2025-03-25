const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'painting'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

console.log(Object.keys(obj));
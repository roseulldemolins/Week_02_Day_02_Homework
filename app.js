const Bus = require('./bus');
const Person = require('./person')

const twentytwo = new Bus (22, 0, "Ocean Terminal")
const rose = new Person ("Rose", 24)

twentytwo.drive()

console.log(twentytwo.distance);
console.log(rose.name);

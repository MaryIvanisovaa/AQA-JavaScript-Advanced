// Third exercise

class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    console.log(this.price * this.quantity);
  }

  purchase() {
    let remainder = this.quantity - 1;
    this.remainder = remainder;
    if (this.remainder !== 0 && this.remainder < this.quantity) {
      console.log('There are', this.remainder, 'items left.');
    } else {
      console.log('Product is out of stock.');
    }
  }
}

const tShirt = new ProductClass('t-shirt', 20, 100);
tShirt.getTotalPrice();
tShirt.purchase();

const dress = new ProductClass('dress', 50, 50);
dress.getTotalPrice();
dress.purchase();

const scarves = new ProductClass('scarves', 20, 1);
scarves.getTotalPrice();
scarves.purchase();

// Fourth exercise

class CarClass {
  #speed;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.#speed = 0;
  }

  getCarInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }

  accelerate(speed) {
    this.#speed += speed;
  }

  brake(speed) {
    this.#speed += speed;
  }

  getSpeed() {
    return this.#speed;
  }
}

class AudiClass extends CarClass {
  #color;
  constructor(make, model, year, color) {
    super(make, model, year);
    this.#color = color;
  }

  getCarInfo() {
    return `${super.getCarInfo()}, Color: ${this.#color}`;
  }

  myCurrentColor() {
    return this.#color;
  }

  setColor(color) {
    this.#color = color;
  }
}

const audi = new AudiClass('Audi', 'A6', 2022, 'Black');

console.log(audi.getCarInfo());
// audi.accelerate(50);
audi.brake(20);

console.log(`Current speed: ${audi.getSpeed()} км/год`);
audi.setColor('Gray');

console.log(audi.getCarInfo());
console.log(`Current color: ${audi.myCurrentColor()}`);

// Fifth exercise

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class PeopleRegistry {
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }

  removePerson(firstName, lastName) {
    this.people = this.people.filter(
      person => person.firstName !== firstName || person.lastName !== lastName,
    );
  }

  findPerson(firstName, lastName) {
    return this.people.find(
      person => person.firstName === firstName && person.lastName === lastName,
    );
  }

  listPeople() {
    this.people.forEach(person => {
      console.log(
        `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`,
      );
    });
  }
}

const registry = new PeopleRegistry();

const person1 = new Person('John', 'Doe', 30);
const person2 = new Person('Jane', 'Smith', 25);

registry.addPerson(person1);
registry.addPerson(person2);

console.log('List of persons in the register:');
registry.listPeople();

const foundPerson = registry.findPerson('John', 'Doe');
if (foundPerson) {
  console.log('Found a person:', foundPerson);
} else {
  console.log('Person not found.');
}

registry.removePerson('Jane', 'Smith');
console.log("After deleting the person 'Jane Smith':");

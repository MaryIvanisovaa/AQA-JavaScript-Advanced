//First exercise

let age = 21;
console.log(age > 18);

//Second exercise

let name = 'Maria';
let secondName = 'Vlad';
let greeting = `Hello ${name} and ${secondName}`;
console.log(greeting);

//Third exercise

let number = '5.489';
numberFloat = parseFloat(number);
//console.log (typeof number);
let notNumber = isNaN(numberFloat);
let number1 = numberFloat.toFixed(1);

console.log(
  `${typeof numberFloat}, ${notNumber}, ${number1}, ${typeof number}`,
);

//Fourth exercise

let someInformation =
  'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation';
let length = someInformation.length;
someInformation = someInformation.replaceAll('Wikipedia', 'New word');
let result = someInformation.includes('world');
let ending = someInformation.toLowerCase().endsWith('foundation');

console.log(`${length}, ${someInformation}, ${result}, ${ending}`);

//Fifth exercise

let pi = Math.PI;
let radius = 20;
let area = pi * radius ** 2;
let area1 = area.toFixed(2);

let lenght1 = 15;
let width = 10;
let areaA = lenght1 * width;
let area2 = areaA.toFixed(2);

let height = 30;
let dimension = pi * radius ** 2 * height;
let dimension1 = dimension.toFixed(2);

console.log(`${area1}, ${area2}, ${dimension1}`);

/* eslint-disable no-undef */
//First exercise:

let yearsOfExperience = 5;
let salary;
let bonus;

if (yearsOfExperience === 0.5) {
  salary = 0;
  bonus = 0;
} else if (yearsOfExperience > 0.5 && yearsOfExperience <= 1) {
  salary = 100;
  bonus = 0.01 * salary;
} else if (yearsOfExperience > 1 && yearsOfExperience <= 2) {
  salary = 333;
  bonus = 0.03 * salary;
} else if (yearsOfExperience > 2 && yearsOfExperience <= 4) {
  salary = 555;
  bonus = 0.04 * salary;
} else if (yearsOfExperience >= 4) {
  salary = 666;
  bonus = yearsOfExperience * salary;
}
let totalAmount = salary + bonus;
console.log('Total amount:', totalAmount);

//Second exercise:

let month = '12';

switch (month) {
  case '01':
    message = 'January';
    break;
  case '02':
    message = 'February';
    break;
  case '03':
    message = 'March';
    break;
  case '04':
    message = 'April';
    break;
  case '05':
    message = 'May';
    break;
  case '06':
    message = 'June';
    break;
  case '07':
    message = 'July';
    break;
  case '08':
    message = 'August';
    break;
  case '09':
    message = 'September';
    break;
  case '10':
    message = 'October';
    break;
  case '11':
    message = 'November';
    break;
  case '12':
    message = 'December';
    break;
  default:
    'You are in another galaxy';
    break;
}

console.log(message);

//Third exercise

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const number = 30;

for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0 || i === 22) {
    continue;
  }
  console.log(i);
}

//Fourth exercise

let numberB = 55;
let numberC = 20;

let result = numberB > numberC ? numberB : numberC;

console.log(result);

//Fifth exercise

let str = 'Javascript is fun';
let i = 0;

while (i < str.length) {
  let char = str[i];

  if (char === 'a') {
    i++;
    continue;
  }

  if (char === 'n') {
    break;
  }
  console.log(char);
  i++;
}

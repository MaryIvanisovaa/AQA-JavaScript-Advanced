//[10, 2, 5]// Результат
//[5, 0, 2] // Помилка
//[10, 'abc', 2] // Помилка
//[3] // Помилка

function divideArray(numbers) {
  try {
    if (numbers.length < 2) {
      throw new Error('Array should have minimum 2 numbers');
    }

    const result = [];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i - 1] === 0) {
        throw new Error('Division by zero is not allowed');
      }
      if (isNaN(numbers[i - 1]) || isNaN(numbers[i])) {
        throw new Error('Invalid input: not a number');
      }
      const quotient = numbers[i] / numbers[i - 1];
      result.push(quotient);
    }

    console.log('Division results:', result);
  } catch (error) {
    console.error(`Something went wrong: ${error.message}`);
  } finally {
    console.log('Робота завершена');
  }
}

const numbers = [3];

divideArray(numbers);

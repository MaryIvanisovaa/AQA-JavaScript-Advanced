function myFunction(value) {
  console.log(value);
  if (value <= 20) {
    myFunction(value + 1);
  }
}

myFunction(2);

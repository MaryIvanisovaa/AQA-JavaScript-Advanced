function iterateNestedArray(array) {
    for (let subArray of array) {
        for (let element of subArray) {
            console.log(element);
            if (element === 'cat') {
                console.log('There is a cat');
            }
        }
    }
}

let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];
  
iterateNestedArray(nestedArray);

  


let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];
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

  
iterateNestedArray(nestedArray);

  


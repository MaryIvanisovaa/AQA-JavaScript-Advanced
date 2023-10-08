// First exercise

let automationQA ={
};
automationQA.programmerName = 'Mariia',
automationQA.programmingLanguages = ['Java', 'JavaScript']
automationQA ["age"] = 25,
automationQA ["Languages"] = ['Ukrainian', 'English', 'Spanish'],
automationQA.preferences = [
    basicPreferences = 'table', 'laptop', 'mouse',
    additionalPreferences = 'Additional Monitor', 'headphones'
]
console.log(automationQA);

//Second exercise

let room = {
    roomName: 'Living room',
    size: 32,
    window: 3,
}
console.log(room.roomName, room.window)

// Third exercise

const movie = {
    title: 'Harry Potter',
    releaseYear: '30 November 2001',
    genre: 'fantasy',
}
movie.genre = 'action movie'
movie.title =  'Gorgeous'
movie.mainRole = 'Jackie Chan',
movie.director = 'Vincent Kok',
delete movie.title

console.log(movie);

// Fourth exercise

const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

for (const book of englishBooks) {
    if (book.title === "The Great Gatsby") {
        continue;
    }

    if (book.year > 1940) {
        console.log(book.year);
    }

    if (book.author === "George Orwell") {
        book.author = "Another One";
    }
}
console.log(englishBooks);

// Fifth exercise 

let mainObj = {
    firstKey: 'First One',
    secondKey: 'Second One',
    secondObj: {
      thirdKey: 'Third One',
      fourthKey: "Forth One"
    },
  };
  
  for (const someKeys in mainObj) {
    if (typeof mainObj[someKeys] === "object") {
      for (const innerKey in mainObj[someKeys]) {
        console.log(mainObj[someKeys][innerKey]);
      }
    } else {
      console.log(mainObj[someKeys]);
    }
  }

//   Sixth exercise
  
    let user = {
        name: 'Vlada',
        age: 20,
        email: 'test@gmail.com',
        address: {
          city: 'Alicante',
          postalCode: '03014'
        }
      };
      
function getUserInfo({ name, age }) {
    return `User: ${name}, Age: ${age}`;
  }
  
  function getFullAddress({ email, address: { city, postalCode } }) {
    return `Email: ${email}, City: ${city}, Postal code: ${postalCode}`;
  }
  console.log(getUserInfo(user));
  console.log(getFullAddress(user));
      
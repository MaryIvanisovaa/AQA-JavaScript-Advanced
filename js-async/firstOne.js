// First exercise
const userSettings = {
    username: 'john_doe',
    theme: 'dark',
    language: 'en',
    notifications: true
  };
  
const serializedSettings = JSON.stringify(userSettings);
  console.log(serializedSettings); 


const deserializedSettings = JSON.parse(serializedSettings);
console.log(deserializedSettings); 

// Second exercise

async function delayAndLog(message, milliseconds) {
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
    console.log(message);
  }
  async function main() {
    console.log('Start the program');
    await delayAndLog('This message is delayed for 1000 milliseconds', 1000);
    await delayAndLog('This message is delayed for 2000 milliseconds', 2000);
    await delayAndLog('This message is delayed for 500 milliseconds', 500);
    console.log('End of program');
  }

  main(); 

//   Third exercise

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request error: ${response.status}`);
  }

  return await response.json();
}

const commentsPromise = fetchData('https://jsonplaceholder.typicode.com/comments/1');
const postsPromise = fetchData('https://jsonplaceholder.typicode.com/posts/2');

Promise.all([commentsPromise, postsPromise])
  .then(([comments, posts]) => {
    console.log('Result Promise.all:');
    console.log('Comments:', comments);
    console.log('Posts:', posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

Promise.race([commentsPromise, postsPromise])
  .then((result) => {
    console.log('Result Promise.race:');
    console.log('First finished Promise:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  
  
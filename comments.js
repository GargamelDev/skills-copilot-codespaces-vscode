// Create web server
// 1. Load the express module
// 2. Create an express app
// 3. Create a route using app.get() that listens for GET requests on the /comments path
// 4. When a GET request is made, send back the comments array as a JSON response
// 5. Start the server on port 4001

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'nice pic' },
  { username: '3rd-wheel', comment: 'I like turtles' }
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
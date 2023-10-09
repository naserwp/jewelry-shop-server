const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = process.env.PORT || 30001;

const jewelry = require('./data/jewelry.json');

// Use the cors middleware to enable CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Jewelry Shop has running!');
});

app.get('/jewelry', (req, res) => {
  res.send(jewelry);
});

app.listen(port, () => {
  console.log(`Jewelry Shop API is -Example app listening on port ${port}`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const data = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/data', (req, res) => {
    res.send(data);
})





app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const filteredData = data.filter(recipe => recipe.id === id);
  res.send(filteredData);
});

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.use(express.json());
prod_route = require('./routes/productRoute');
app.use('/api/v1', prod_route);

module.exports = app;

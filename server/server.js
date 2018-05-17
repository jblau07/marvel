const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = process.env.PORT || 8082;

const heroRoute = require('./routes/hero')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api/hero', heroRoute);

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} `)
});
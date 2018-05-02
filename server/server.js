const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} `)
});
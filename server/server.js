const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = process.env.PORT || 8080;

const heroRoute = require('./routes/hero')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api/hero', heroRoute);

// app.get('/', (req, res) => {
//   res.send('smoke test');
// });

// app.get('/api', (req, res) => {
//   axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=spider-man&apikey=920f1b66bb927430958fba8381a26255}`)
//     .then(result => {
//       return res.send('hit')
//     })
// })

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} `)
});
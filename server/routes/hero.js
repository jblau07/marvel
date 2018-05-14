const axios = require('axios');
const express = require('express');
const { getResponse } = require('../helper');
const CryptoJS = require('crypto-js')
const router = express.Router();

router.route('/')
  .get((req, res) => {
    let marvelResponse = getResponse();
    axios.get(`${marvelResponse}`)
    
    .then(result => {
      return res.json(result.data)
    })
    .catch(err => {
      console.log({err: err.message})
      return res.json({err: err.message})
    })
  })
  
  router.route('/')
  .post((req, res) => {
    let searchName = req.body.name;
    let marvelResponse = getResponse(searchName);
    axios.get(`${marvelResponse}`)
    
    .then(result => {
      return res.json(result.data)
    })
    .catch(err => {
      console.log({err: err.message})
      return res.json({err: err.message})
    })
  })

  module.exports = router;

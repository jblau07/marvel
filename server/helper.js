module.exports = {
  getResponse
}

const CryptoJS = require('crypto-js');
const keys = require('../src/config');

function getResponse() {
  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + keys.api.private + keys.api.public);

  let url = 'https://gateway.marvel.com:443/v1/public/characters?name=spider-man&';

  return `${url}ts=${ts}&apikey=${keys.api.public}&hash=${hash}
    `
}

module.exports = {
  getResponse
}

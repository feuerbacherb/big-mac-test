const express = require('express');
const router = require('express').Router();
const publicIp = require('public-ip');
const fetch = require('node-fetch');

router.get('/', function(req, res, next) {
  async function pubIP() {
    return await publicIp.v4();
  }
  
  //const url = `http://ipvigilante.com/json/${pubIP()}/full`;

  //console.log( await pubIP());

  pubIP()
    .then(ip => fetch(`http://api.ipstack.com/${ip}?access_key=fe2fad5c19ae9851003b5753f19b7a1a&output=json`))
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => console.log(err));

});

module.exports = router;
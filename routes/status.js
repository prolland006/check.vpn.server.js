"use strict";
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const _status = {
    'vpnOK' : require('../app').loop._vpnOK
  };
  res.send(_status);
});

module.exports = router;

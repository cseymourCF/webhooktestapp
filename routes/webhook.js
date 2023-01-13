var express = require('express');
var router = express.Router();

/* PUT webhook */
router.put('/', function(req, res, next) {
  console.log('got a put: ' + JSON.stringify(req.body));
  res.send(JSON.stringify(req.body));
});

module.exports = router;

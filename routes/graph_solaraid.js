var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('graph_solaraid', { title: 'graph' });
});

module.exports = router;
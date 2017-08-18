var express = require('express');
var router = express.Router();

/* GET search result page. */
router.get('/', function(req, res, next) {
  res.render('search-result', { title: 'Express' });
});

module.exports = router;

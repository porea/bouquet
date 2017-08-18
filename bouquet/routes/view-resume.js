var express = require('express');
var router = express.Router();

/* GET view resume page. */
router.get('/', function(req, res, next) {
  res.render('view-resume', { title: 'Express' });
});

module.exports = router;

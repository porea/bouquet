var express = require('express');
var router = express.Router();

/* GET create resume page. */
router.get('/', function(req, res, next) {
  res.render('create-resume', { title: 'Express' });
});

module.exports = router;

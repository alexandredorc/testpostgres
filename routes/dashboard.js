var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard.html', { title: 'Incroyable app creer par Alex' });
})


module.exports = router;


var express = require('express');
var router = express.Router();
const pool = require('../db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register.html');
	console.log("test get ");
});

router.post('/',async(req,res)=>{
	console.log(req);
	try {
		console.log(req.body.name);
		console.log(req.body.email);
		console.log(req.body.password);		
		console.log(req.body.repassword);
		if (req.body.password==req.body.repassword){
			const newUser = pool.query(`INSERT INTO users VALUES (DEFAULT,'${req.body.password}','${req.body.name}','${req.body.email}')`);
			res.redirect('/dash');
		}
		else{
			console.log("les mots de passe de son pas les même")
		}
	}
	catch {
		console.error(err.message);
	}
});

module.exports = router;

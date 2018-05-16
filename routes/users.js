var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.locals.connection.query('SELECT * from members', function (error, results, fields) {
 //    if(error) throw error;
 //    res.send(JSON.stringify(results));
 //  });

 res.json([{id:1, name:"khiem", email:"vokhiem@gmail.com"}]);
});

module.exports = router;

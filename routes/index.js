var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/post',function(req,res){
  var number1= parseInt(req.param("number1"));
  var number2= parseInt(req.param("number2"));
  var sum=  number1 + number2;
  var dif= number1 - number2;
  var pro= number1 * number2;
  var quo= number1 / number2;
  console.log();
  res.send({
    sum:sum,
    dif:dif,
    pro:pro,
    quo:quo
  });
});
module.exports = router;

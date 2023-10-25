var express = require("express");
var router = express.Router();

const store = require("./store");
store.init();
router.get("/Bmi/:weight/:height", function (req, res) {
  const { weight, height } = req.params;
  const bmi =
    parseFloat(weight) /
    ((parseFloat(height) / 100) * (parseFloat(height) / 100));

  let message = "";
  if (bmi < 18.5) {
    message = "Underweight”";
  } else if (bmi >= 18.5 && bmi < 25) {
    message = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    message = "Overweight";
  } else {
    message = "Obesity(chet)";
  }
  res.send({ bmi: bmi, des: message });
});

module.exports = router;


/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello' , function(req , res){
  res.setHeader("Content-Typ","application/json")
  res.send({"res_text":"Hello world"});
});

router.get('/items', function(req, res) {
  res.send({iteam: store.getAllItems()});
});

router.post('/items', function(req, res){
  if(typeof req.body.iteam !== 'string'){
    req.status(400).end();
    return;
  }
  store.addItem(req.body.iteam);
  res.status(201).end();
});
*/

var express = require('express');
var router = express.Router();
var db  = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    db.moneda.findAll()
    .then(resp =>{
        res.json({
            moneda: resp
        })
    })
});

module.exports = router;
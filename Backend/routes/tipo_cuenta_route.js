var express = require('express');
var router = express.Router();
var db  = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    db.tipo_cuenta.findAll()
    .then(resp =>{
        res.json({
            tipo_cuenta: resp
        })
    })
});

module.exports = router;
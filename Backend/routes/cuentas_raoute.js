var express = require('express');
var router = express.Router();
var db  = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    db.cuentas.findAll()
    .then(resp =>{
        res.json({
            error: false,
            cuentas: resp
        })
    })
    .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.post('/',(req,res)=>{
    db.cuentas.create({
        id_cuentaZUN    : 1,
        id_tipo_cuenta  : req.body.id_tipo_cuenta,
        id_moneda       : req.body.id_moneda,
        activa          : 1,
        predeterminada  : req.body.predeterminada
    })
    .then(cuenta => res.status(201).json({
            error: false,
            data: cuenta,
            message: 'Cuenta creada exitosamente.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    
    db.cuentas.update({
        id_tipo_cuenta  : req.body.id_tipo_cuenta,
        id_moneda       : req.body.id_moneda,
    },
    {
        where: {
            id_cuenta: req.params.id
        }
    })
    .then(cuenta => res.status(201).json({
        error: false,       
        message: 'Cuenta actualizada exitosamente.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));

});

module.exports = router;
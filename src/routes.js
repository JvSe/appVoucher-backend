const express = require('express');

const DispositivoController = require('./Controllers/DispositivoController');
const VoucherController = require('./Controllers/VoucherController');

const routes = express.Router();

routes.get('/', function(req, res){
    res.send("Servidor Rodando")
});

routes.post('/criar-dispositivo', DispositivoController.criarDispositivo);
routes.post('/criar-voucher', VoucherController.criarVoucher);
routes.post('/validar-dispositivo', DispositivoController.updateDispositivo);
routes.post('/validarVoucher', VoucherController.updateVoucher);



module.exports = routes;
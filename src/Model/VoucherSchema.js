const { Schema, model } = require('mongoose');

const VoucherSchema = new Schema({
    nome_turista: {
        type: String
    },
    id_turista: {
        type: String
    },
    dataPrevistaVisita: {
        type: String
    },
    dataPrevistaFinalVisita: {
        type: String
    },
    idVoucher:{
        type: String
    },
    cidade:{
        type: String
    },
    hash:{
        type: String
    },
    idGuia:{
        type: String
    },
    idPontoTuristico:{
        type: String
    },
    dataVisitaValidada:{
        type: String
    },
}, {
    timestamps: true,
});

module.exports = model('Voucher', VoucherSchema);
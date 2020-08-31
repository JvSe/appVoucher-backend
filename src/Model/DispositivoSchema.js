const { Schema, model } = require('mongoose');

const DispositivoSchema = new Schema({
    idUser: {
        type: String
    },
    nomeDispositivo: {
        type: String
    },
    numeroDispositivo: {
        type: String
    },
    hash: {
        type: String
    },
    dispositivoVerificado:{
        type: Boolean
    }
}, {
    timestamps: true,
});

module.exports = model('Dispositivo', DispositivoSchema);
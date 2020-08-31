const Dispositivo = require('../Model/DispositivoSchema')

module.exports = {
    async updateDispositivo(req, res) {
        const { hash } = req.body;
        const retorno  = await Dispositivo.findOneAndUpdate({hash}, {dispositivoVerificado: true})

        console.log(retorno);

        return res.json(retorno);
    },

    async criarDispositivo(req, res) {
        const { idUser, nomeDispositivo, numeroDispositivo, hash } = req.body;

        const dispositivoUser = await Dispositivo.findOne({idUser});

        var dispositivo;

        if (!dispositivoUser) {
            dispositivo = await Dispositivo.create({
                idUser,
                nomeDispositivo,
                numeroDispositivo,
                hash,
                dispositivoVerificado: false
            });

            console.log(dispositivo);

            return res.json(dispositivo);
        } else {
            return res.send('Dispositivo já cadastrado')
        }

        

        
    }
}
    
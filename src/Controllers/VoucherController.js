const Voucher = require('../Model/VoucherSchema');

module.exports = {
    async updateVoucher(req, res) {
        const { idVoucher, dataVisitaValidada } = req.body;
        const voucherValidado = await Voucher.findOneAndUpdate({idVoucher}, {dataVisitaValidada})

        console.log(voucherValidado);

        return res.json(true);
    },

    async criarVoucher(req, res) {
        const { nome_turista, id_turista, dataPrevistaVisita, dataPrevistaFinalVisita, idVoucher, cidade, hash } = req.body;

        const voucherUser = await Voucher.findOne({idVoucher});

        var voucher;

        if (!voucherUser) {
            voucher = await Voucher.create({
                nome_turista,
                id_turista,
                dataPrevistaVisita,
                dataPrevistaFinalVisita,
                idVoucher,
                cidade,
                hash,
                dataVisitaValidada: false
            });

            console.log(voucher);

            return res.json(voucher);
        } else {
            return res.send('Voucher já cadastrado')
        }
        
    }
}
    
const crypto = require('crypto');
const connection = require('../databese/connection');

//cadastro de ongs no banco de dados 
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });


    return response.json({ id });
    }
};
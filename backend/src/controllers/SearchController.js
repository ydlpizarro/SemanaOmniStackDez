const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        console.log(request.query);
        //buscar todos os devs em um raio de 10 km
        //filtrar por tecnologia
        return response.json({devs:[]});

    }
}
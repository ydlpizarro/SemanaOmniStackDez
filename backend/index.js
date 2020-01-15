const express = require('express');
const app = express();

//app tem os seguintes metodos (http): get (obter), post (enviar), put (editar), delete (deletar)
//tipos de parâmetros
//query params: req.query(filtros, ordenação, paginação, ...)
//route params: request.params ()
//body
app.post('/users', (request,response)=> {
    console.log(request.query);
    return response.json({
        message:'Hello Yohel'
    });
})
app.listen(3333);
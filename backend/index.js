const express = require('express');
const app = express();
app.use(express.json());

//app tem os seguintes metodos (http): get (obter), post (enviar), put (editar), delete (deletar)
//tipos de parâmetros
//query params: request.query(filtros, ordenação, paginação, ...)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body(dados para criação ou alteração de um registro)

//MongoDB (Banco não relacional)

app.post('/users', (request,response)=> {
    console.log(request.body);
    return response.json({
        message:'Hello Yohel'
    });
})
app.listen(3333);
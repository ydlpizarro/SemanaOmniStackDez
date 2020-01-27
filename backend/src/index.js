const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://yohelinux:11refa11@cluster0-xzhei.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);

//app tem os seguintes metodos (http): get (obter), post (enviar), put (editar), delete (deletar)
//tipos de parâmetros
//query params: request.query(filtros, ordenação, paginação, ...)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body(dados para criação ou alteração de um registro)

//MongoDB (Banco não relacional)


app.listen(3333);
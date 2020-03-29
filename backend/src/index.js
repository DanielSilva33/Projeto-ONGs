const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    * Rota / Recurso

    * Metodo HTTP:

    * GET: buscar informação do back-end
    * POST: criar informação no back-end
    * PUT: alterar informação no back-end
    * DELETE: deleter informação do back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query: parâmetros nomeados enviados na rota apos "?", (filtros, paginação);
 * Route params: parâmetros utilizados para indentificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar os recursos
 */



app.listen(3333);
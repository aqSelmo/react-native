const express = require('express');
const routes = require('./routes');

const App = express();

App.use(express.json());
App.use(routes);

App.listen(3333, "localhost", ()=>{
    console.log("Servidor ativo.")
});
var express = require('express');
var app = express();
const serverPort = 3000;

app.get('/', async function (req, res) {
    res.json({ sucesso: true, mensagem: "Fala mundao do Fiote" });
});

app.listen(serverPort, function () {
    console.log("Servidor ativo - Porta:", serverPort);
});
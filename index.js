require('dotenv/config');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const serverPort = process.env.PORT_NODE_EXPRESS_INDEX || 3000;

app.get('/', async function (req, res) {
    res.json({ sucesso: true, mensagem: "Fala mundao!" });
});

app.listen(serverPort, function () {
    console.log("Servidor ativo - Porta:", serverPort);
});
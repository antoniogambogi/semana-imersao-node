const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/celke', {useNewUrlParser: true,
useUnifiedTopology: true}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("ERROR: Conexão com o BD MongoDB falhou!");
})

app.get('/home', function (req, res) {
    res.send('API online');
});

app.listen(8080, function () {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});


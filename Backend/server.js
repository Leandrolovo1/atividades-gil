const express = require("express");

const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta Curriculo
app.use(express.static(path.join(__dirname, 'Curriculo')));

app.get('/Curriculo', (req, res) => {
    const filePath = path.join(__dirname, 'Curriculo/curriculo.html');
    res.sendFile(filePath);
});
app.get('/Portal', (req, res) => {
    const filePath = path.join(__dirname, 'PortalNoticias/portal.html');
    res.sendFile(filePath);
});



app.post('/alunos', (req, res) => {
    console.log(req.body);
    res.send(`
        <h1>[OK] Novo Contato Recebido!</h1>    
        <button onclick="window.location.href='/'">Voltar ao Currículo</button>
    `);
});

app.post('/alunos/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.send('<h1>[OK] Nova Alteração Recebida!</h1>');
});

console.log('Servidor Executando...');
// coloca a aplicação para ouvir a porta 3000
app.listen(3000);
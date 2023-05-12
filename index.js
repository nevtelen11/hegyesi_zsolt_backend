const express = require('express');
const app = express();
const db = require('./models');
const Kategoria = db.Kategoria;
const Aru = db.Aru;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("fut a szerver");
})

app.get('/api/aruk', (req, res) => {
    Aru.findAll({include: {model: Kategoria, as :"Kategoria"}})
    .then(data => {
        res.send(data);
    })
})

app.get('/api/aruk/:id', (req, res) => {
    const id = req.params.id;
    Aru.findByPk(id,{include: {model: Kategoria, as :"Kategoria"}})
    .then(data => {
        if (data)
            res.send(data);
        else
            res.status(404).send("ez a termek nem letezik")

    })
})


app.put('/api/aruk/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    Aru.update(body,{where: {id:id}})
    .then(data => {
        if (data)
            res.status(204).send();
        else
            res.status(404).send("ez a termek nem letezik")

    })
})





app.listen(9000)
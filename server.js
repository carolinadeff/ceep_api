const express = require('express');
const bodyParser = require ('body-parser');
const consign = require('consign')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use(function (req, res, next) {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

consign()
    .include('controllers')
    .into(app)

app.listen(process.env.PORT || 3002, () => {console.log('Servidor rodando')})
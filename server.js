const express = require('express');
const bodyParser = require ('body-parser');
const consign = require('consign')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
consign()
    .include('controllers')
    .into(app)

app.listen(process.env.PORT || 3002, () => {console.log('Servidor rodando')})
const http = require('http');
const express = require('express');
const bodyParser=require('body-parser')
const port = process.env.PORT || 8788;
const app = express();
const appRoutes = require('./routes/appRoutes')
const mongoose = require('mongoose');
const cors = require('cors');
//Conexão com o MongoDB
mongoose.connect('mongodb://localhost/Empregados',{useMongoClient:true});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',appRoutes);


http.createServer(app).listen(port);

console.log('---------- Servidor rodando na porta',port,'----------');

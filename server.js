require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const colors = require('colors');

const connectDB = require('./config/database');
const users = require('./routes/api/v1/users');


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



//Conectar ao Banco
connectDB();
//Rotas
app.use('/users', users);




const port = process.env.PORT;
app.listen(port, () => console.log(colors.yellow(' ###################################','\n',`-- SERVER ONLINE NA PORTA ${port} ! --`,'\n ###################################')));

   
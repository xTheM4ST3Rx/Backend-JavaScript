require("dotenv").config();
const mongoose = require('mongoose');
const db = process.env.MONGO_URI;
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(db,{    
            useUnifiedTopology: true,
            useNewUrlParser:true
        });

        console.log(colors.yellow(' ###################################','\n',`-- CONECTADO AO BANCO DE DADOS --`,'\n ###################################'));
    } catch (error) {
        console.error(error.message);
        //exit process with failure
    process.exit(1);
    }
}

module.exports = connectDB;
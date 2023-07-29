// const { Person } = require("./person");
const dotenv = require("dotenv");
// Adiciona conexao com o banco de dados
const connectToDatabase = require("./src/database/connect");

dotenv.config();

// Inicia a conexao
connectToDatabase();


// // require("./modules/path")
// // require("./modules/fs");
// // require("./modules/http.js");

require('./modules/express');

// const person = new Person("Ian");

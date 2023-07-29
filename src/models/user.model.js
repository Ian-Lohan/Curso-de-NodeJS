// Pega importacoes de outros modulos
const mongoose = require("mongoose");

// Cria um schema (configuracao de um registro)
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});

// Instancia a schema User
const UserModel = mongoose.model("User", userSchema);

// Degfine o que eh exportado deste arquivo ao ser importado com require
module.exports = UserModel;

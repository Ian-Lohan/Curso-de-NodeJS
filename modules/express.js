// Importações de outros arquivos e modulos
const express = require("express");
const UserModel = require("../src/models/user.model");

// Conecta ao express
const app = express();
app.use(express.json());

// EJS (HTML dinamico)
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware (executado entre a requisicao e o resultado)
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next(); // executa o middleware apos a requisicao eh iniciada (req) e permite continuar com o resultado (res)
});

// ENDPOINTS (resultados de requisicoes req/res)

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

// Pegar todos usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Pegar um usuario pelo ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Adicionar um usuario
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualizar um usuario
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar um Usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Porta do localhost
const port = 8080;

// Verifica se o banco esta rodando no express e em qual porta
app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));

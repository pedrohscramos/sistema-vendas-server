const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./api/data/db");
db.sequelize.sync({ force: true}).then(() => {
    console.log("Eliminar e recriar banco");
});

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo ao Sistema de vendas" });
});

/**
 * Inserir arquivos de rotas
 */
require("./api/routes/categorias")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});
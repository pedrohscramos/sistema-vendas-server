const Sequelize = require('sequelize');
const sequelize = new Sequelize('vendas', 'padrao', 'p34c3m4k3r', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/** 
 * Inserir acesso aos models */ 
db.categorias = require("../models/categoria.js")(sequelize, Sequelize);

module.exports = db;
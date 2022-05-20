const { sequelize, Sequelize } = require("../data/db");

module.exports = (sequelize, Sequelize) => {
    
    const categoria = sequelize.define('categoria', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
    
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        paranoid: true
    }
    );
    return categoria;
}
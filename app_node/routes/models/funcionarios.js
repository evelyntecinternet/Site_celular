const Sequelize = require('sequelize');

const celular = require('./celular');

const funcionarios = celular.define('funcionarios',{
    fun_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fun_nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fun_login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fun_senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

funcionarios.sync();

module.exports = funcionarios;
const Sequelize = require('sequelize');
//Conexão com arquivo db que possui a conexão com o banco
const celular = require('./celular');
//Constante Usuário recebe a Table users
//https://sequelize.org/v6/manual/model-basics.html
const students = celular.define('students',{
    stu_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    stu_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stu_login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stu_pass: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
//https://sequelize.org/v6/manual/model-basics.html#model-synchronization
// O user.sync() - verifica se a tabela existe, caso não exista, será criada
students.sync();
// user.sync({ alter: true }); // Para fazer alteração na estrutura caso exista
module.exports = students;
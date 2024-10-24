// npm install --save sequelize
const Sequelize = require('sequelize');
//Conexão com arquivo db que possui a conexão com o banco
const celular = require('./celular');
//Constante Usuário recebe a Table books
//https://sequelize.org/v6/manual/model-basics.html
const books = celular.define('books',{
    boo_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    boo_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    boo_description: {
        type: Sequelize.STRING,
        allowNull: false,
    }   
});
//https://sequelize.org/v6/manual/model-basics.html#model-synchronization
// O user.sync() - verifica se a tabela existe, caso não exista, será criada
books.sync();
// user.sync({ alter: true }); // Para fazer alteração na estrutura caso exista
module.exports = books;
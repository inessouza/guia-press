const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '38013051Q!1qqqqqqq', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
const {Sequelize} = require('sequelize')
 const sequelize = new Sequelize(process.env.PG_URL || "postgres://kanban:kanban@localhost/kanban", {
   
    define: {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },


 })

module.exports = sequelize
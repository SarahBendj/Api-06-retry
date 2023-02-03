const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class Tag extends Model { }

Tag.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    color: { 
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName : "tag",
    modelName : "Tag"
});

module.exports = Tag;
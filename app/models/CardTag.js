const { DataTypes , Model } = require('sequelize')
const sequelize = require('../database')
// je require l'objet de ma table de jointure pour déclarer leurs assos
const Tag = require('./Tag')
const Card = require('./Card')

class CardTag extends Model {}

CardTag.init({
    cardId : {
        type : DataTypes.INTEGER,
        field : 'card_id',
        references : {
            model : Card,
            key : 'id'
        }
        
    },
    TagId : {
        type : DataTypes.INTEGER,
        field : 'tag_id' ,
        references : {
            model : Tag ,
            key : 'id'
        }
    }
 } ,
    {
        sequelize,
        tableName: 'card_tag',
        timestamps: false
    }
);

module.exports = CardTag;
const sequelize = require('./app/database')
const Card = require('./app/models/Card')
const List = require('./app/models/List')
const model = require('./app/models/model')

require('dotenv').config()

async function main(){
    const list = await List.findByPk(1 , {
        include :[ Card]
    })
    console.log(list.get())

}
main()
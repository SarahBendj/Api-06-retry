
const Card  = require('../models/Card')
const Tag = require('../models/Tag')

const cardController = {
    getCards : async ( request ,response ) => {
        const Cards = await Card.findAll()
        response.json({Cards})
    },
    getCardById : async (request , response) => {
        const id = request.params.id
        const CardId = await Card.findByPk(id)
        response.json({CardId})
    },
    addCard : async(request , response)=> {
        const  {name , position} = request.body
        const newCard = await Card.create({description: "lorem fiori ipsum kukulu" , position : 10 , color :'#255447' , list_id : 4 })
        response.json({newCard})
    },
    updateCard : async (request , response) => {
        const id = request.params.id
        const CardToUpdate = await Card.findByPk(id)
        await Card.update({name: "CHANCE"}, {where: {id:id}})
        
        response.json({CardToUpdate})
    },
    deleteCard: async (request , response)=> {
        const id = request.params.id
        const CardToDelete = await Card.destroy({where :{id:id}})
        response.json({CardToDelete})
    },
    //je dois selecetionner une carte , puis lui ajouter un TAG
    /*addTagToCard : async (request , response) => {
        const id = request.params.id
        const cardTagged = await Card.findByPk(id)
        await Card.update({
            include : [Tag]
        })
        
        response.json({cardTagged})
    },*/

}
module.exports = cardController
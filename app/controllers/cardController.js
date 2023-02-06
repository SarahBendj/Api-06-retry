
const Card  = require('../models/Card')
const CardTag = require('../models/CardTag')
const Tag =  require('../models/CardTag')


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
        const  {description , list_id } = request.body
        console.log(description + list_id + "c'est laaaaaaaaa")
        const newCard = await Card.create({ description , list_id })
    
        response.json({newCard})
    },
    updateCard : async (request , response) => {
        const id = request.params.id
        const {description} = request.body
        const CardToUpdate = await Card.findByPk(id)
        await CardToUpdate.update({description}, {where: {id:id}})
        
        
        response.json({CardToUpdate})
    },
    deleteCard: async (request , response)=> {
        const id = request.params.id
        try { 
             const CardToDelete = await Card.destroy({where :{id:id}})
             response.json({CardToDelete,
                            message : `la carte ${id} a bien été supprimée`
                        })
            }catch(error){
                response.status(500).json({
                    statusCode : 500,
                    Message : "erreur serveur " 
                 }) 
             }
    },
    //je dois selecetionner une carte , puis lui ajouter un TAG
    addTagToCard : async (request , response) => {
        const id = request.params.id
        //je recupere la carte que je veux à partir de son ID
        
        const cardTagged = await Card.findAll( {
            include : Tag   })
        response.json({cardTagged})
    },

}
module.exports = cardController
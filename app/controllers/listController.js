const { response } = require('express')
const List  = require('../models/List')

const listController = {
    getLists : async ( request ,response ) => {
        const lists = await List.findAll()
        response.json({lists})
    },
    getListById : async (request , response) => {
        const id = request.params.id
        const listId = await List.findByPk(id)
        response.json({listId})
    },
    addList : async(request , response)=> {
        const  {name , position} = request.body
        const newList = await List.create({name: "vitamine" , position : 10})
        response.json({newList})
    },
    updateList : async (request , response) => {
        const id = request.params.id
        const listToUpdate = await List.findByPk(id)
        await List.update({name: "misoto"}, {where: {id:id}})
        
        response.json({listToUpdate})
    },
    deleteList: async (request , response)=> {
        const id = request.params.id
        const listToDelete = await List.destroy({where :{id:id}})
        response.json({listToDelete})
    }

}
module.exports = listController
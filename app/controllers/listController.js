const { response } = require('express')
const Card = require('../models/Card')
const List  = require('../models/List')

const listController = {
    getLists : async ( request ,response , next ) => {
        const lists = await List.findAll()
        response.json(lists)
        next()
    },
    getListById : async (request , response , next) => {
        const id = request.params.id
        const listId = await List.findByPk(id ,{ 
            include : [Card]})
        if(!listId) {
            next()
        return }
        response.json(listId)
    },

    addList : async(request , response)=> {
        const  {name } = request.body
        const newList = await List.create({name})
        response.json({newList})
    },
    updateList : async (request , response) => {
        const { name , position} = request.body
        const id = request.params.id
        
          const list = await List.findByPk(id)
          await list.update({name , position}, {where: {id:id}})
        response.json(list)

        
        
    },
    deleteList: async (request , response)=> {
        const id = request.params.id
        const listToDelete = await List.destroy({where :{id:id}})
        response.json({listToDelete})
    }

}
module.exports = listController
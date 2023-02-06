const { response } = require('express')
const Tag  = require('../models/Tag')
const model = require('../models/model')

const tagController = {
    getTags : async ( request ,response ) => {
        const Tags = await Tag.findAll()
        response.json({Tags})
    },
    getTagById : async (request , response) => {
        const id = request.params.id
        const TagId = await Tag.findByPk(id)
        response.json({TagId})
    },
    addTag : async(request , response)=> {
        const  {name , color} = request.body
        const newTag = await Tag.create({name: "fine" ,color : '#255166'})
        response.json({newTag})
    },
    updateTag : async (request , response) => {
        const id = request.params.id
        const TagToUpdate = await Tag.findByPk(id)
        await Tag.update({name: "okdoki"}, {where: {id:id}})
        
        response.json({TagToUpdate})
    },
    deleteTag: async (request , response)=> {
        const id = request.params.id
        const TagToDelete = await Tag.destroy({where :{id:id}})
        response.json({TagToDelete})
    }

}
module.exports = tagController
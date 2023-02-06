const sequelize = require('./app/database')
const Card = require('./app/models/Card')
require('dotenv').config()
const List = require('./app/models/List')

const router = require('./app/router')
const PORT = process.env.PORT


const express = require('express')
const { response } = require('express')
const app = express()

app.use(express.json())
 
const model = require('./app/models/model')



app.use(router)
app.use((resquest ,response  ) =>{
    response.status(404).json({
        statusCode :404,
        message : "not found"

    })
    
})

app.listen( PORT , ()=>{
    console.log(`app's runing on ${PORT}`)
})


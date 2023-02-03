const sequelize = require('./app/database')
const Card = require('./app/models/Card')
require('dotenv').config()
const List = require('./app/models/List')
const model = require('./app/models/model')
const router = require('./app/router')
const PORT = process.env.PORT


const express = require('express')
const app = express()

app.use(express.json())
 //POUR RECEVOIR DES DATA DANS LE BODY
app.use(express.urlencoded({ extended: true }));


app.use(router)

app.listen( PORT , ()=>{
    console.log(`app's runing on ${PORT}`)
})


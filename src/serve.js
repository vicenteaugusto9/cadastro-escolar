require('dotenv').config()
const express = require('express')

const alunoRouter = require('./routes/alunoRouter.js')
const professorRouter = require('./routes/professorRouter.js')
const e = require('express')

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use( '/api',alunoRouter)
app.use('/api',professorRouter)

app.listen(PORT, ()=>{
    console.log(`serividor rodando na porta :${PORT}`)
})
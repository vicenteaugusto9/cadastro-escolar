const { PrismaClient } = require('@prisma/client')

const prisma = new  PrismaClient()

const listarProfessor = async (res,req) => {
    try {
        const professores =  await prisma.professor.findMany()
        res.json(professores)
    } catch (error){
        res.status(500).json({error: 'Falha ao criar lista de professores'})
    }
}

const criarProfessor = async (res,req)=>{
    try{
        const {nome,email,idade} = await prisma.professor.create({
            data : {
                nome,
                email,
                idade:parseInt(idade)
            }
        })
        res.status(201).json(novoProfessor)
    } catch (error){
        if(error.code === 'P2002'){
            return res.status(400).json({error:'Este email ja existe em uma outra conta '})
        }
        res.status(500).json({error:'nao foi possivel criar um novo professor'})
    }
}

const atualizarProfessor = async (res,req) => {
    try{
        const {id} = req.params
        const {name,email} = req.body


        const professor = await prisma.professor.update({
            where : {id:parseInt(id)},
            data :{
                name,
                email
            }
            })
            res.json(professor)
    } catch (error){
        if(error.code === 'P2025'){
            return res.status(404).json({error: 'Professor Nao encontrado'})
        }
        res.status(500).json({error:'Nao foi possivel atualizar professor'})
    }
}

const deletarProfessor = async (res,req)=>{
    try{
        const {id} = req.params 
        
        await prisma.professor.delete({
            where : {id: parseInt(id)}
        })
        res.status(204).send()
    } catch (error){
        if(error.code ==='P2025'){
            return res.status(404).json({error:'Professor nao encontrado '})
        }
        res.status(500).json({error:'Falha ao deletar professor'})
    }
}

module.exports = {
    listarProfessor,
    criarProfessor,
    atualizarProfessor,
    deletarProfessor
}
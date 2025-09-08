const { PrismaClient } = require('../generated/prisma');

const prisma = new  PrismaClient()

const listarAlunos = async (req,res) => {
    try{
        const alunos = await prisma.aluno.findMany();
        res.json(alunos)
    } catch(error){
        res.status(500).json({error:'Falha ao criar a listar de alunos '})
         
    }
}

const criarAlunos = async (req,res) =>{
    try{
        const {nome,email,idade} = req.body
         await prisma.aluno.create({
            data : {
                nome,
                email,
                idade: parseInt(idade)
            }

        })
        res.status(201).json(novoAluno)
    } catch (error){
        if(error.code === 'P2002'){
            return res.status(400).json({error:'Este email  ja existe em uma outra conta '})
        }
        res.status(500).json({error: 'Nao foi possive criar o aluno '})
    }
}

const atualizarAluno = async (res, req) => {
    try{
        const {id} = req.params
        const {nome,email} = req.body

        const aluno = await prisma.aluno.update({
            where:{id : parseInt(id)},
            data : { nome, email}
        })
        
        res.json(aluno)
    } catch (error){
        if (error.code === 'P2025'){
            return res.status(404).json({error: 'Aluno nao encontrado'})
        }
        res.status(500).json({error: 'Nao foi possivel atualizar o aluno'})
    }
}

const deletarAluno = async (res,req) => {
    try{
        const {id} = req.params

        await prisma.aluno.delete({
            where: {id: parseInt(id)}
        })
        res.status(204).send()
    } catch(error){
         if (error.code === 'P2025'){
            return res.status(404).json({error:'Aluno nao encontrado'})
         }
         res.status(500).json({error: 'Nao foi possivel deletar o aluno '})
    }
}

module.exports  = {
    listarAlunos,
    criarAlunos,
    atualizarAluno,
    deletarAluno
}
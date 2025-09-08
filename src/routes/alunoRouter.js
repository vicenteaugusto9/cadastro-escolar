const express = require('express')
const router = express.Router()
const alunoController = require('../controllers/alunoController')

router.get('/alunos',alunoController.listarAlunos)
router.post('/alunos',alunoController.criarAlunos)
router.put('/alunos/:id',alunoController.atualizarAluno)
router.delete('/alunos/:id',alunoController.deletarAluno)


module.exports = router

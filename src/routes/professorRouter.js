const express = require('express')
const router = express.Router()
const professorController = require('../controllers/professorController')

router.get('/professor',professorController.listarProfessor)
router.post('/professor',professorController.criarProfessor)
router.put('/professor/:id',professorController.atualizarProfessor)
router.delete('/professor/:id',professorController.deletarProfessor)

module.exports = router